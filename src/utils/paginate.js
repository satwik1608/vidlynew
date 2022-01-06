import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}

/*
    _(items) to convers array into lodash wrapper
    .slice to start taking elements from that index
    .take to take that much elements
    .value() to convert it again into an array
    */
