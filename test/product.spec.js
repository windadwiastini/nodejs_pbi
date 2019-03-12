const assert = require("assert");
const request = require(`request-promise`);

describe(`Product API`, () => {
  const hostUrl = `http://localhost:3000`;
  const productsApiPath = `/products`;
  const testProduct = {
    name: "Apple Macbook Pro 2015",
    price: 2000
  };
  let createdProduct = null;

  beforeEach(async () => {
    // Always create a new Product record.
    const product = testProduct;

    const params = {
      method: "POST",
      uri: `${hostUrl}${productsApiPath}`,
      body: product,
      json: true
    };

    // console.log(`param: ${JSON.stringify(params)}`);
    // Call create product API
    const response = await request(params);
    createdProduct = response;
    // console.log(`[DEBUG] -<beforeEach> createdProduct: \n`, createdProduct);
  });

  afterEach(async () => {
    const params = {
      method: "DELETE",
      uri: `${hostUrl}${productsApiPath}/${createdProduct._id}`,
      json: true
    };

    // Call create product API
    await request(params);
    createdProduct = null;
  });

  // it(`test unit`, async() => {
  //   assert.equal(1, 1);
  // });

  it(`creates a new Product`, () => {
    assert.ok(createdProduct);
    assert.equal(createdProduct.name, testProduct.name);
    assert.equal(createdProduct.price, testProduct.price);
    assert.ok(createdProduct._id);
  });

  it(`gets all products`, async () => {
    const params = {
      method: "GET",
      uri: `${hostUrl}${productsApiPath}`,
      json: true
    };

    const products = await request(params);

    // console.log(`[DEBUG] - products: \n`, products);
    assert.ok(Array.isArray(products));
    assert.ok(products.length > 0);
    const product = products[0];

    assert.equal(product.name, createdProduct.name);
    assert.equal(product.price, createdProduct.price);
    assert.equal(product._id, createdProduct._id);
  });

  it(`gets a product`, async () => {
    const params = {
      method: "GET",
      uri: `${hostUrl}${productsApiPath}/${createdProduct._id}`,
      json: true
    };

    const product = await request(params);

    // console.log(`[DEBUG] - products: \n`, product);
    assert.equal(product.name, createdProduct.name);
    assert.equal(product.price, createdProduct.price);
    assert.equal(product._id, createdProduct._id);
  });

  it(`updates a product`, async () => {
    createdProduct.price = 1500;

    const params = {
      method: "PUT",
      uri: `${hostUrl}${productsApiPath}/${createdProduct._id}`,
      body: createdProduct,
      json: true
    };

    const updatedProduct = await request(params);

    assert.equal(updatedProduct.name, createdProduct.name);
    assert.equal(updatedProduct.price, createdProduct.price);
    assert.equal(updatedProduct._id, createdProduct._id);
  });

  it(`deletes a product`, async () => {
    const targetId = createdProduct._id;

    const params = {
      method: "DELETE",
      uri: `${hostUrl}${productsApiPath}/${targetId}`,
      json: true
    };

    const empty = await request(params);
    assert.deepStrictEqual(empty, {});
  });
});