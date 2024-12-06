### **Dòng lệnh**

```bash
curl --include http://localhost:3052
```

là một **lệnh HTTP** được gửi bằng công cụ `curl` (Client URL). Ý nghĩa của nó:

- `curl`:
  - Công cụ dòng lệnh dùng để gửi yêu cầu (request) đến một máy chủ web thông qua các giao thức như HTTP, HTTPS, FTP, v.v.
  - Trong trường hợp này, bạn đang sử dụng curl để gửi yêu cầu HTTP.
- `--include`:

  - Lệnh này yêu cầu curl hiển thị phần header của phản hồi HTTP cùng với nội dung phản hồi (body).
  - Header chứa thông tin meta như mã trạng thái (200 OK, 404 Not Found), loại nội dung (Content-Type), độ dài nội dung (Content-Length), v.v.

- `http://localhost:3052`:
  - URL đích mà bạn muốn gửi yêu cầu HTTP.
  - `localhost`: Địa chỉ cục bộ (127.0.0.1), đại diện cho máy tính của bạn.
  - `3052`: Số cổng mà dịch vụ hoặc máy chủ web (web server) đang chạy.

### **Kết quả mong đợi**

Khi chạy lệnh này, `curl` sẽ:

1. Gửi một yêu cầu HTTP GET đến máy chủ cục bộ (`localhost`) đang chạy trên cổng 3052.
2. Nhận phản hồi từ máy chủ (nếu có).
3. Hiển thị cả **HTTP header** và **body** của phản hồi trên màn hình.

## **Ví dụ về phản hồi:**

```css
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 42

{"message": "Welcome to the local server"}
```

## **Khi nào sử dụng dòng lệnh này?**

- **Kiểm tra endpoint API**: Xác minh một API hoặc dịch vụ đang hoạt động.
- **Debug máy chủ cục bộ**: Xem phản hồi từ máy chủ đang chạy tại địa chỉ localhost.
- **Xác thực header**: Kiểm tra thông tin meta (status code, content type) trong phản hồi.

---

### **Dòng lệnh**

```powershell
node --watch server.js
```

có nghĩa là bạn đang chạy file JavaScript `server.js` bằng **Node.js** với cờ `--watch`.

### **Ý nghĩa từng phần:**

1. `node`:

- Lệnh để chạy file JavaScript bằng **Node.js**, một môi trường chạy JavaScript phía server.

2. `--watch`:

- Tính năng theo dõi (watching): Tự động theo dõi file và reload lại ứng dụng khi có bất kỳ thay đổi nào trong file hoặc các file liên quan.

- Nếu bạn sửa đổi nội dung của `server.js` hoặc một module mà `server.js` import, **Node.js** sẽ tự động khởi động lại quá trình.

3. `server.js`:

- File JavaScript chính mà bạn muốn **Node.js** thực thi.

### **Lưu ý:**

- Tính năng `--watch` có sẵn từ **Node.js 18** trở lên.
- Nếu bạn dùng phiên bản **Node.js** thấp hơn, bạn có thể sử dụng các công cụ bên thứ ba như `nodemon` để theo dõi file:

  ```powershell
  npm install -g nodemon
  nodemon server.js
  ```

---

### **Chạy lệnh `curl http://localhost:3111/` sử dụng `git bash`**

Để chạy được lệnh `curl http://localhost:3111/` sử dụng `git bash`, cần chạy lệnh `npm run start` trước đó.

```powershell
npm run start
```

```bash
curl http://localhost:3111/
```

---

### **Dòng lệnh thứ n**
