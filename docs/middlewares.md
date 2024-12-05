## **Morgan**

```powershell
npm install morgan --save-dev
```

Là một middleware cho node.js được sử dụng để ghi log (logging) các yêu cầu HTTP gửi đến server. Morgan giúp theo dõi và ghi lại các thông tin như:

- Phương thức HTTP (GET, POST, v.v.)
- URL được yêu cầu
- Mã trạng thái HTTP trả về
- Thời gian xử lý yêu cầu
- Các thông tin khác liên quan đến yêu cầu.

**Morgan** thường được dùng trong quá trình phát triển và debug để giúp lập trình viên hiểu rõ cách ứng dụng xử lý các yêu cầu HTTP.

### **Công dụng và tính năng của Morgan:**

1. Ghi log chi tiết về yêu cầu HTTP:
   - Ghi lại thông tin chi tiết như phương thức, URL, mã trạng thái, thời gian xử lý, v.v.
2. Hỗ trợ các format log khác nhau:

   - **Morgan** có các kiểu format log tích hợp sẵn như:
     - `combined`: Đầy đủ thông tin, bao gồm cả địa chỉ IP của client và user-agent (thường dùng trong môi trường sản xuất).
     - `common`: Ít thông tin hơn combined, bỏ user-agent.
     - `dev`: Dành cho phát triển, hiển thị ngắn gọn với màu sắc để dễ đọc.
     - `short`: Log ngắn gọn.
     - tin`y: Log cực kỳ ngắn gọn.

3. Ghi log vào file hoặc console:

   - Log có thể được in ra console hoặc ghi vào file để theo dõi sau.

4. Hữu ích trong phát triển và vận hành:
   - Trong quá trình phát triển, Morgan giúp debug nhanh hơn.
   - Trong môi trường sản xuất, log có thể được ghi vào file để phân tích sau.

---

## **Helmet**

```powershell
npm install helmet --save-dev
```

Là một middleware bảo mật cho Express.js. Nó giúp cải thiện bảo mật của ứng dụng web bằng cách cấu hình các HTTP headers. Helmet cung cấp các biện pháp bảo vệ chống lại các mối đe dọa phổ biến trên web như **cross-site scripting (XSS)**, **clickjacking**, và các loại tấn công khác.

### **Công dụng và tính năng của Helmet**

1. Tăng cường bảo mật thông qua HTTP headers:

   - Helmet tự động thiết lập hoặc điều chỉnh các HTTP headers để bảo vệ ứng dụng.
   - Ví dụ:
     - `Content-Security-Policy`: Ngăn chặn XSS bằng cách kiểm soát nguồn tài nguyên.
     - `X-Frame-Options`: Bảo vệ chống clickjacking.
     - `Strict-Transport-Security`: Bắt buộc sử dụng HTTPS.
     - `X-DNS-Prefetch-Control`: Tắt tính năng DNS prefetching.

2. Tích hợp dễ dàng:

   - Cung cấp cấu hình mặc định phù hợp cho hầu hết các ứng dụng.
   - Cho phép tuỳ chỉnh từng tính năng hoặc tắt những header không cần thiết.

3. Giảm rủi ro bảo mật phổ biến:
   - Bảo vệ ứng dụng khỏi một số lỗ hổng phổ biến mà không cần thay đổi nhiều code.
   - Đặc biệt hữu ích khi ứng dụng cần tuân thủ các tiêu chuẩn bảo mật (như OWASP).

---

## **Compression**

```powershell
npm i compression --save-dev
```

`Node.js compression middleware`
là một middleware dùng để nén dữ liệu HTTP trước khi gửi về phía client. Nén dữ liệu giúp giảm kích thước của phản hồi HTTP, từ đó:

1. **Tăng tốc độ tải trang**: Giảm thời gian cần thiết để truyền dữ liệu qua mạng.
2. **Giảm băng thông sử dụng**: Tiết kiệm tài nguyên mạng, đặc biệt quan trọng khi ứng dụng có lượng truy cập lớn.
3. **Cải thiện trải nghiệm người dùng**: Người dùng sẽ nhận được phản hồi nhanh hơn.

### **Công dụng và chức năng của Compression**

1. **Nén dữ liệu phản hồi HTTP**:

   - Middleware sử dụng các thuật toán nén như Gzip hoặc Brotli (nếu trình duyệt hỗ trợ).
   - Phù hợp với các loại dữ liệu như JSON, HTML, CSS, JavaScript, hoặc bất kỳ nội dung văn bản nào.

2. **Tương thích với trình duyệt**:

   - Hầu hết các trình duyệt hiện đại đều hỗ trợ nén Gzip hoặc Brotli.
   - Middleware tự động xử lý việc kiểm tra khả năng nén của trình duyệt thông qua `Accept-Encoding` header.

3. **Cấu hình dễ dàng**:

   - Cho phép tuỳ chỉnh các tham số như mức độ nén, điều kiện nén, hoặc loại nội dung cần nén.

4. **Giảm tải máy chủ**:
   - Mặc dù nén tăng CPU usage một chút, tổng thể, nó giảm tải cho mạng và cải thiện hiệu năng.

---
