**Products REST API**
Description
The Products REST API is a robust and scalable API designed to manage a collection of product data. This API supports various operations such as filtering, sorting, field selection, and pagination to efficiently retrieve product information based on client queries. Built with Node.js, Express, and MongoDB (via Mongoose), this API is perfect for applications that need to handle dynamic and complex queries for product data.

Features
*Filtering*:
Company:
Filter products by company name.
Name: Filter products by partial or full product name using regular expressions (case-insensitive).
Featured: Filter products based on whether they are featured or not.

*Sorting*:
Sort products by any field in ascending or descending order. Multiple fields can be specified and separated by commas.

*Field Selection*:
Select specific fields to include in the response, reducing payload size and improving performance.

*Pagination*:
Retrieve products in paginated form, with customizable page numbers and a limit of items per page.

Endpoints
Get All Products
URL: /API/products
Method: GET
Query Parameters:
company (optional): Filter by company name (e.g., Apple, Samsung).
name (optional): Filter by product name (supports partial matching).
featured (optional): Filter by featured status (true or false).
sort (optional): Sort results by fields (e.g., price,-rating).
select (optional): Select specific fields to return (e.g., name, price).
page (optional): Page number for pagination (default is 1).
limit (optional): Number of items per page (default is 10).
Get All Products (Testing)
URL: /api/products/testing
Method: GET
Query Parameters: All query parameters are passed directly to MongoDB for testing purposes.
