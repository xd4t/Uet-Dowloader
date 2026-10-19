# UET Portal Downloader

Extension cho Chrome / Edge / Firefox giúp **tick chọn nhiều file** trên trang Files của môn học tại [portal.uet.vnu.edu.vn](https://portal.uet.vnu.edu.vn) và **tải về một lần**, không phải bấm từng file.

## Tính năng

- Công tắc **Bật/Tắt** trong popup: chỉ khi bật mới hiện ô tick, tắt là trang trở lại như cũ.
- Ô tick cạnh tên từng file, kèm thanh công cụ ở góc phải dưới:
  - **Chọn tất cả** / **Bỏ chọn**
  - **Tải đã chọn**: tải lần lượt, cách nhau 1,2 giây để tránh bị portal chặn.
- Tự nhận file khi chuyển thư mục (trang load động).
- Chạy trên cả Chrome/Edge (Manifest V3) và Firefox 109 trở lên.

## Cài đặt

Tải repo về (`git clone` hoặc *Code → Download ZIP*, rồi giải nén).

### Chrome / Edge
1. Mở `chrome://extensions` (hoặc `edge://extensions`).
2. Bật **Developer mode**.
3. Bấm **Load unpacked** và chọn thư mục chứa `manifest.json`.

### Firefox
1. Mở `about:debugging#/runtime/this-firefox`.
2. Bấm **Load Temporary Add-on…** và chọn file `manifest.json`.

> Firefox sẽ gỡ add-on tạm khi đóng trình duyệt, nên mỗi lần mở lại phải nạp lại.

## Cách dùng

1. Đăng nhập portal và mở trang **Files** của môn học.
2. Bấm icon extension và bật **"Bật chọn file tải"**.
3. Tick các file cần tải rồi bấm **Tải đã chọn**.

> Nếu trình duyệt hỏi *"Cho phép tải nhiều file?"*, chọn **Allow**.

## Cấu trúc

```
├── manifest.json   # Khai báo extension (MV3, hỗ trợ cả Firefox)
├── popup.html      # Giao diện công tắc bật/tắt
├── popup.js        # Lưu trạng thái bật/tắt vào storage
├── content.js      # Chèn ô tick, thanh công cụ, xử lý tải
└── icons/          # Icon 16/32/48/128 px
```

## Cách hoạt động

Portal chạy trên nền Canvas LMS: link tên file có dạng `/files/<id>/download?download_frd=1`. `content.js` quét các link này, gắn ô tick vào trước tên file, và dùng `MutationObserver` để bắt các file được load thêm khi chuyển thư mục. Trạng thái bật/tắt lưu trong `storage.local`, nên popup và trang luôn đồng bộ.

## Lưu ý

- Chỉ tải được tài liệu mà tài khoản của bạn có quyền xem. Extension không vượt qua bất kỳ giới hạn truy cập nào.
- Không tải quá nhiều file liên tục để tránh làm nặng hệ thống của trường.
- Đây là dự án cá nhân, không liên quan chính thức tới UET hay VNU.

## License

MIT
