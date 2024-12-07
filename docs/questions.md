# Kinh nghiệm đặt câu hỏi

- Rõ ràng về ngữ cảnh: Hệ cơ sở dữ liệu, ngôn ngữ, framework, hoặc vấn đề gặp phải.
- Cụ thể: Cần lý thuyết, cách triển khai, hay hỗ trợ giải quyết lỗi.

---

## **Một vạn câu hỏi ❔**

#### 1. Static trong class JavaScript có ý nghĩa gì và khi nào nên dùng?

#### 2. Singleton là gì, và tại sao nó lại hữu ích khi tạo kết nối cơ sở dữ liệu?

#### 3. Bạn có thể hướng dẫn cách triển khai Singleton để tạo kết nối MongoDB trong Node.js không?

#### 4. Tôi muốn sử dụng Singleton để tạo kết nối cơ sở dữ liệu MongoDB trong Node.js. Bạn có thể giải thích tại sao Singleton phù hợp và cung cấp một ví dụ cách triển khai không?

#### 5. Làm sao để chạy file `access.post.http`?

- Cần cài đặt extension [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) and [HTTP Client](https://marketplace.visualstudio.com/items?itemName=mkloubert.vscode-http-client)
- run command `node --watch server.js`
- Mở file `access.post.http` và chạy

#### 6. Tại sao `shopModel.findOne({ email }).lean()` lại query nhanh hơn `shopModel.findOne({ email })`?

- Sự khác biệt giữa dùng `.lean()` và không dùng `.lean()` trong Mongoose là gì?
- Tại sao dùng `.lean()` có thể làm tăng hiệu suất truy vấn (hay giảm tải cho ta rất nhiều)?
- 18:30 [Section 5: Api Sign-up Shop (1)](https://www.youtube.com/watch?v=mkol2daN7FU&list=PLw0w5s5b9NK4ucXizOF-eKAXKvn9ruCw8&index=5)

#### 7. `const hashPassword = await bcrypt.hash(password, 10)` là gì?

- Tai sao cần dùng bcrypt?
- Tại sao cần dùng saltOrRounds là `10`?

### 7. Sử dụng thuật toán bất đối xứng để tạo public key và private key (thuật toán tối ưu nhất hiện nay?)

- Tại sao cần dùng thuật toán bất đối xứng?
- Tại sao cần dùng thuật toán bất đối xứng để tạo public key và private key?
- [Cách triển khai thuật toán CHẶN HACKER chiếm JWT cho dù đánh cắp KEYSECRET trong database | JWT](https://www.youtube.com/watch?v=pK3oBX0vB38)

### 8. Public key là gì? Dùng để làm gì?

### 9. Private key là gì? Dùng để làm gì?
