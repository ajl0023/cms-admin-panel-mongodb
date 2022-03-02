import { n as noop, d as safe_not_equal } from "./index-c56b6a2a.js";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe };
}
const store = () => {
  const state = {
    currentTable: null,
    tables: {},
    columns: [],
    categories: [],
    cursor: null,
    modalVisible: true
  };
  const { subscribe, set, update } = writable(state);
  const methods = {
    handleModal() {
      update((s) => {
        s.modalVisible = true;
        return s;
      });
    },
    setCurrentTable(table) {
      update((s) => {
        s.currentTable = table;
        return s;
      });
    },
    async fetchData(next, load) {
      const currentTable = state.currentTable;
      const res = await fetch(`http://localhost:3000/api/category?category=${currentTable.orig}${next ? `&next=${next}` : ""}`);
      const columnsRes = state.columns.length > 0 ? state.columns : await fetch(`http://localhost:3000/api/columns?category=${currentTable.orig}`);
      const columns = state.columns.length > 0 ? state.columns : await columnsRes.json();
      if (state.columns.length > 0) {
        update((s) => {
          s.columns = columns;
          return s;
        });
      }
      let rows = await res.json();
      const cursor = rows.page;
      update((s) => {
        s.cursor = cursor;
        return s;
      });
      const final_arr = [];
      rows = rows.results.map((row) => {
        const obj = {};
        const arr = [];
        for (const column of columns) {
          arr.push({
            column,
            value: row[column.db_name]
          });
        }
        obj["table_cols"] = arr;
        obj["data"] = {
          uid: row.uid
        };
        final_arr.push(obj);
        return arr;
      });
      return {
        rows: final_arr,
        columns,
        cursor
      };
    }
  };
  return {
    subscribe,
    set,
    update,
    ...methods
  };
};
const tableStore = store();
let host;
{
  host = "http://147.182.193.194";
}
const hostName = host;
export { hostName as h, tableStore as t, writable as w };
