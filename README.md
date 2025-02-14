# nextJs-tutorial

Explanation:
const pathname = usePathname();

Retrieves the current URL path as a string (e.g., "/products/123/reviews/456").
const productId = pathname.split("/")[2];

Splits the path into an array using / as a delimiter: ["", "products", "123", "reviews", "456"].
pathname.split("/")[2] extracts "123" (the product ID).
const reviewId = pathname.split("/")[4];

Extracts "456" (the review ID) from the same split array.
Example:
For URL:
"/products/123/reviews/456"

productId → "123"
reviewId → "456"
