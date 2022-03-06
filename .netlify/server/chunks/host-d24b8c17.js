var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  h: () => hostName,
  t: () => tableStore,
  w: () => writable
});
var import_index_c56b6a2a = require("./index-c56b6a2a.js");
const subscriber_queue = [];
function writable(value, start = import_index_c56b6a2a.n) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if ((0, import_index_c56b6a2a.d)(value, new_value)) {
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
  function subscribe(run, invalidate = import_index_c56b6a2a.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_c56b6a2a.n;
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
  return __spreadValues({
    subscribe,
    set,
    update
  }, methods);
};
const tableStore = store();
let host;
{
  host = "http://147.182.193.194";
}
const hostName = host;
module.exports = __toCommonJS(stdin_exports);
