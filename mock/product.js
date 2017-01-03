'use strict';

const qs = require('qs');
const mockjs = require('mockjs');

// 数据持久
let productListData = {};
if (!global.productListData) {
  const data = mockjs.mock({
    'data|100': [{
      'id|+1': 1,
      name: '@cname',
      'price|100-2000': 1,
      state: Random.integer(0,1)
    }],
    page: {
      total: 100,
      current: 1
    }
  });
  productListData = data;
  global.productListData = productListData;
} else {
  productListData = global.productListData;
}

module.exports = {

  'GET /api/product' (req, res) {
    const page = qs.parse(req.query);
    const pageSize = page.pageSize || 14;
    const currentPage = page.page || 1;

    let data;
    let newPage;

    let newData = productListData.data.concat();

    if (page.field) {
      const d = newData.filter(function (item) {
        return item[page.field].indexOf(page.keyword) > -1;
      });

      data = d.slice((currentPage - 1) * pageSize, currentPage * pageSize);

      newPage = {
        current: currentPage * 1,
        total: d.length
      };
    } else {
      data = productListData.data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
      productListData.page.current = currentPage * 1;
      newPage = {
        current: productListData.page.current,
        total: productListData.page.total
      };
    }


    setTimeout(function () {
      res.json({
        success: true,
        data,
        page: newPage
      });
    }, 500);
  },

  'POST /api/users' (req, res) {
    setTimeout(function () {
      const newData = qs.parse(req.body);

      newData.id = productListData.data.length + 1;
      productListData.data.unshift(newData);

      productListData.page.total = productListData.data.length;
      productListData.page.current = 1;

      global.productListData = productListData;
      res.json({
        success: true,
        data: productListData.data,
        page: productListData.page
      });
    }, 500);
  },

  'DELETE /api/users' (req, res) {
    setTimeout(function () {
      const deleteItem = qs.parse(req.body);

      productListData.data = productListData.data.filter(function (item) {
        if (item.id == deleteItem.id) {
          return false;
        }
        return true;
      });

      productListData.page.total = productListData.data.length;

      global.productListData = productListData;
      res.json({
        success: true,
        data: productListData.data,
        page: productListData.page
      });
    }, 500);
  },

  'PUT /api/users' (req, res) {
    setTimeout(function () {
      const editItem = qs.parse(req.body);

      productListData.data = productListData.data.map(function (item) {
        if (item.id == editItem.id) {
          return editItem;
        }
        return item;
      });

      global.productListData = productListData;
      res.json({
        success: true,
        data: productListData.data,
        page: productListData.page
      });
    }, 500);
  }

};
