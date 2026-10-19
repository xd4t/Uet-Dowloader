# UET Portal Downloader

**Tác giả:** XD4T

Extension cho trình duyệt giúp **tick chọn nhiều file** trên trang *Files* của môn học tại [portal.uet.vnu.edu.vn](https://portal.uet.vnu.edu.vn) rồi **tải về một lần**, không cần bấm từng file nữa.

Hỗ trợ **Chrome**, **Microsoft Edge**, **Cốc Cốc / Brave** (các trình duyệt nhân Chromium) và **Firefox 109+**.

## Mục lục

- [Extension là gì?](#extension-là-gì)
- [Tính năng](#tính-năng)
- [Cài đặt](#cài-đặt)
- [Cách dùng](#cách-dùng)
- [Câu hỏi thường gặp / Khắc phục lỗi](#câu-hỏi-thường-gặp--khắc-phục-lỗi)
- [Cập nhật, tắt và gỡ extension](#cập-nhật-tắt-và-gỡ-extension)
- [Quyền riêng tư và an toàn](#quyền-riêng-tư-và-an-toàn)
- [Dành cho người muốn xem code](#dành-cho-người-muốn-xem-code)
- [License](#license)

## Extension là gì?

Extension (tiện ích mở rộng) là một phần mềm nhỏ cài thêm vào trình duyệt, giống như app cài thêm vào điện thoại. Extension này chỉ hoạt động trên trang portal UET: nó thêm ô tick cạnh tên từng file và một thanh nút để tải các file đã chọn.

Bạn **không cần biết lập trình** và **không cần cài Git**. Chỉ cần làm theo phần Cài đặt bên dưới.

## Tính năng

- **Công tắc Bật/Tắt** trong popup của extension. Chỉ khi bật thì ô tick mới hiện ra, tắt là trang trở lại như cũ.
- **Ô tick** cạnh tên từng file.
- **Thanh công cụ** ở góc phải phía dưới trang, gồm:
  - **Chọn tất cả** / **Bỏ chọn**
  - **Tải đã chọn**: tải lần lượt từng file, cách nhau 1,2 giây để tránh bị portal chặn.
  - Bộ đếm `Đã chọn: N` và tiến độ `Đang tải 3/10...`
- **Tự nhận file mới** khi bạn chuyển thư mục (trang portal load động, không cần F5).
- Nhớ trạng thái bật/tắt cho lần sau.

## Cài đặt

Hiện extension chưa có trên cửa hàng của trình duyệt, nên cài thủ công theo 2 bước: **(1) tải code về**, **(2) nạp vào trình duyệt**. Mất khoảng 1 phút.

### Bước 1: Tải code về máy

1. Mở trang GitHub của dự án: <https://github.com/xd4t/Uet-Dowloader>
2. Bấm nút xanh **Code** rồi chọn **Download ZIP**.
3. Giải nén file ZIP vừa tải (chuột phải → *Extract All…* / *Giải nén*).
4. Chuyển thư mục vừa giải nén đến một chỗ cố định, ví dụ `Documents`. Kiểm tra bên trong có file `manifest.json`.

> ⚠️ **Đừng xóa hoặc di chuyển thư mục này sau khi cài.** Trình duyệt đọc extension trực tiếp từ thư mục đó, xóa đi là extension biến mất.

Người đã quen Git có thể dùng `git clone https://github.com/xd4t/Uet-Dowloader.git`.

### Bước 2: Nạp vào trình duyệt

#### Chrome / Edge / Cốc Cốc / Brave

1. Mở thanh địa chỉ, gõ rồi nhấn Enter:
   - Chrome: `chrome://extensions`
   - Edge: `edge://extensions`
   - Cốc Cốc: `coccoc://extensions`
   - Brave: `brave://extensions`
2. Bật công tắc **Developer mode** (Chế độ dành cho nhà phát triển). Công tắc nằm ở góc phải trên (Chrome, Cốc Cốc, Brave) hoặc thanh bên trái (Edge).
3. Bấm **Load unpacked** (Tải tiện ích đã giải nén).
4. Chọn thư mục chứa file `manifest.json` (thư mục vừa giải nén) rồi bấm **Select Folder**.
5. Thấy **UET Portal - Tải tài liệu nhanh** xuất hiện trong danh sách là xong.
6. *(Nên làm)* Bấm biểu tượng mảnh ghép 🧩 trên thanh công cụ, rồi bấm biểu tượng **ghim** cạnh tên extension để icon luôn hiện, dễ bấm.

#### Firefox

1. Gõ `about:debugging#/runtime/this-firefox` vào thanh địa chỉ rồi nhấn Enter.
2. Bấm **Load Temporary Add-on…** (Nạp add-on tạm thời).
3. Chọn file `manifest.json` trong thư mục vừa giải nén.

> ⚠️ Firefox sẽ **gỡ add-on tạm khi bạn đóng trình duyệt**, nên mỗi lần mở lại Firefox phải nạp lại bằng 3 bước trên. Nếu dùng hằng ngày, nên dùng Chrome hoặc Edge.

## Cách dùng

1. **Đăng nhập** [portal.uet.vnu.edu.vn](https://portal.uet.vnu.edu.vn) và mở trang **Files** của môn học.
2. Bấm **icon extension** trên thanh công cụ, rồi bật công tắc **"Bật chọn file tải"**.
3. Ô tick sẽ hiện cạnh tên từng file và thanh công cụ hiện ở góc phải dưới. Hãy **tick các file** muốn tải, hoặc bấm **Chọn tất cả**.
4. Bấm **Tải đã chọn**. Các file được tải lần lượt về thư mục Downloads của trình duyệt.
5. Dùng xong có thể tắt công tắc để trang trở lại bình thường.

> Nếu trình duyệt hỏi *"Cho phép tải xuống nhiều file?"* (*This site wants to download multiple files*), hãy chọn **Allow / Cho phép**. Nếu không, chỉ file đầu tiên được tải.

## Câu hỏi thường gặp / Khắc phục lỗi

**Bật công tắc rồi mà không thấy ô tick?**
- Nhấn **F5** để tải lại trang portal. Trang nào đã mở *trước khi* bạn cài extension thì cần tải lại một lần.
- Chắc chắn bạn đang ở trang **Files** của môn học (danh sách file/thư mục), không phải trang chủ môn hay trang khác.
- Vào trang quản lý extension, kiểm tra extension đang ở trạng thái **bật**.

**Không thấy icon extension trên thanh công cụ?**
Bấm biểu tượng mảnh ghép 🧩 và ghim extension ra ngoài (xem bước 6 phần cài đặt).

**Bấm "Tải đã chọn" mà chỉ tải được 1 file?**
Trình duyệt đã chặn tải nhiều file. Bấm vào biểu tượng thông báo ở thanh địa chỉ (hoặc vào *Cài đặt → Quyền riêng tư và bảo mật → Cài đặt trang web → Tải xuống tự động*), chọn **Cho phép** cho `portal.uet.vnu.edu.vn`, rồi thử lại.

**Tải xuống bị lỗi hoặc ra file rỗng / trang đăng nhập?**
Phiên đăng nhập có thể đã hết hạn. Đăng nhập lại portal, F5 rồi tải lại.

**Có file không hiện ô tick?**
Extension chỉ gắn ô tick vào các link file có dạng `/files/<số>`. Nếu bạn thấy trường hợp không nhận, hãy [mở issue](https://github.com/xd4t/Uet-Dowloader/issues) kèm tên môn/thư mục và ảnh chụp màn hình.

**Chrome báo "Disable developer mode extensions" mỗi lần mở?**
Đây là cảnh báo bình thường với extension cài thủ công. Cứ bấm **Cancel / Giữ lại**, extension vẫn dùng được.

**Extension đã cài rồi nhưng tự mất (Firefox)?**
Xem phần cài đặt Firefox: add-on tạm chỉ tồn tại đến khi đóng trình duyệt.

## Cập nhật, tắt và gỡ extension

- **Cập nhật phiên bản mới:** tải lại ZIP mới, giải nén **đè lên thư mục cũ** (hoặc thay file), rồi vào trang quản lý extension bấm nút **Reload** (⟳) trên extension. Nếu dùng `git clone` thì chạy `git pull` rồi Reload.
- **Tắt tạm:** gạt công tắc trong popup, hoặc tắt extension trong trang quản lý extension.
- **Gỡ hẳn:** vào trang quản lý extension, bấm **Remove / Xóa**. Sau đó có thể xóa thư mục đã giải nén.

## Quyền riêng tư và an toàn

- Extension **chỉ chạy trên `portal.uet.vnu.edu.vn`**, không đọc dữ liệu từ trang web nào khác.
- Quyền duy nhất ngoài trang portal là `storage`, dùng để nhớ trạng thái bật/tắt.
- **Không thu thập, không gửi dữ liệu** của bạn ra bất kỳ máy chủ nào. Mã nguồn công khai để bạn tự kiểm tra.
- Chỉ tải được tài liệu mà tài khoản của bạn **có quyền xem**. Extension không vượt qua bất kỳ giới hạn truy cập nào của portal.
- Vui lòng không tải quá nhiều file liên tục để tránh làm nặng hệ thống của trường.
- Đây là dự án cá nhân, **không liên quan chính thức** tới UET hay VNU.

## Dành cho người muốn xem code

```
├── manifest.json   # Khai báo extension (MV3, hỗ trợ cả Firefox)
├── popup.html      # Giao diện công tắc bật/tắt
├── popup.js        # Lưu trạng thái bật/tắt vào storage
├── content.js      # Chèn ô tick, thanh công cụ, xử lý tải
└── icons/          # Icon 16/32/48/128 px
```

Portal chạy trên nền Canvas LMS: link tên file có dạng `/files/<id>/download?download_frd=1`. `content.js` quét các link này, gắn ô tick vào trước tên file, và dùng `MutationObserver` để bắt các file được load thêm khi chuyển thư mục. Việc tải dùng thẻ `<a download>` kích hoạt lần lượt, cách nhau 1,2 giây. Trạng thái bật/tắt lưu trong `storage.local`, nên popup và trang luôn đồng bộ.

Góp ý, báo lỗi hoặc đề xuất tính năng: [GitHub Issues](https://github.com/xd4t/Uet-Dowloader/issues).

## License

MIT © XD4T
