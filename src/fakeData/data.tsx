interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

export const SampleData: Question[] = [
  {
    "id": 1,
    "question": "Hiện 1 vài items trong control panel thì ta làm sao, mặc định những items không cho phép là ẩn hết?",
    "options": [
      "Configuration Computer/ Control Panel/show specified control panel items",
      "Configuration User/ Control Panel/show specified control panel items",
      "Configuration Computer/ Control Panel/hide specified control panel items",
      "Configuration User/ Control Panel/hide specified control panel items"
    ],
    "answer": "B. Configuration User/ Control Panel/show specified control panel items"
  },
  {
    "id": 2,
    "question": "Quyền Read trong cấu hình Share Permission thì ý nào là đúng?",
    "options": [
      "Xóa tập tin trong thư mục chia sẻ",
      "Cho phép người dùng thay đổi dữ liệu trên tập tin",
      "Cho phép người dùng xem và thi hành các tập tin này trong mục chia sẻ",
      "Toàn quyền trên thư mục chia sẻ"
    ],
    "answer": "C. Cho phép người dùng xem và thi hành các tập tin này trong mục chia sẻ"
  },
  {
    "id": 3,
    "question": "Một ổ đĩa cứng vật lý được định dạng basic disk có thể chia tối đa bao nhiêu primary partition?",
    "options": [
      "“4 primary” or “ 3 primary và 1 extended”",
      " 4 primary và 1 extended",
      "“ 1 primary và 3 extended “ or “4 primary”",
      "2 primary và 2 extended"
    ],
    "answer": "A. “4 primary” or “ 3 primary và 1 extended”"
  },
  {
    "id": 4,
    "question": "Để nâng cao bảo mật trong mạng bạn thực hiện chính sách Maximum Password Age là 7 ngày. Chính sách này sẽ yêu cầu người sử dụng phải đổi mật khẩu hàng tuần. Tuy nhiên sau một thời gian bạn nhận thấy có một vài người sử dụng sau khi đổi sang mật khẩu mới lại đổi ngay về mật khẩu cũ. Bạn sẽ sử dụng chính sách nào dưới đây để tránh tình trạng này",
    "options": [
      "Enforce Password history",
      "Store passwords using reversible encryption",
      "Maximum password age",
      "Minimum password age"
    ],
    "answer": "A. Enforce Password history"
  },
  {
    "id": 5,
    "question": "Bạn có một văn phòng nhỏ mỗi máy thì chịu trách nhiệm cho sự bảo mật của chính nó. Kiều mạng nào mà bạn cần thực thi?",
    "options": [
      "Mạng ngang hàng",
      "Mạng diện rộng (WAN)",
      "Mạng hợp tác",
      "Cả 3 đáp án còn lại đều sai"
    ],
    "answer": "A. Mạng ngang hàng"
  },
  {
    "id": 6,
    "question": "Dịch vụ mạng nào sau đây có thể cấu hình cho máy tính của bạn nhận được địa chỉ IP, default gateway, subnet mask, DNS Server, WINS Server ?",
    "options": [
      "DHCP",
      "FTP",
      "DNS",
      "WINS"
    ],
    "answer": "A. DHCP"
  },
  {
    "id": 7,
    "question": "Muốn chỉ định máy tính nào user được phép sử dụng, bạn thực hiện?",
    "options": [
      "Nhấp đôi chuột lên user để mở hộp thoại Properties, chọn tab Account, bấm nút Login Hours",
      "Nhấp đôi chuột lên user để mở hộp thoại Properties, chọn tab Account, bấm nút Log On To",
      "Nhấp đôi chuột lên user để mở hộp thoại Properties, chọn tab Account, bấm nút Login Hours",
      "Nhấp đôi chuột lên user để mở hộp thoại Properties, chọn tab Account, bấm nút Login Days"
    ],
    "answer": "B. Nhấp đôi chuột lên user để mở hộp thoại Properties, chọn tab Account, bấm nút Log On To"
  },
  {
    "id": 8,
    "question": "Để kiểm tra kết nối từ máy A đến máy B có địa chỉ IP 192.168.1.20, thực hiện?",
    "options": [
      "Ping 192.168.1.20",
      "Ping 192.168.20.1",
      "Nslookup 192.168.1.20",
      "Netstat 192.168.1.20"
    ],
    "answer": "A. Ping 192.168.1.20"
  },
  {
    "id": 9,
    "question": "Ấn một vài items trong control panel, thì ta làm sao, mặc định những items còn lại là hiện ra?",
    "options": [
      "Configuration User / Control Panel / hide specified control panel items",
      "Configuration Computer / Control Panel/hide specified control panel items",
      "Configuration User / Control Panel / show specified control panel items",
      "Configuration Computer/Control Panel / show specified control panel items"
    ],
    "answer": "A. Configuration User / Control Panel / hide specified control panel items"
  },
  {
    "id": 10,
    "question": "Công cụ sau đây cho phép tạo ra các tài khoản người dùng, máy tính và nhóm dựa trên dữ liệu bạn nhập vào hoặc từ một file?",
    "options": [
      "Active Directory Domains And Trusts",
      "DSQUERY",
      "DSMOD",
      "Active Directory Users And Computers"
    ],
    "answer": "D. Active Directory Users And Computers"
  },
  {
    "id": 11,
    "question": "Hệ điều hành nào không gia nhập vào domain được?",
    "options": [
      "windows 7",
      "Android",
      "windows server 2008",
      "windows 8"
    ],
    "answer": "B. Android"
  },
  {
    "id": 12,
    "question": "Volume striped (Raid 0) được tạo từ ít nhất bao nhiêu Volume?",
    "options": [
      "4 đĩa",
      "2 đĩa",
      "3 đĩa",
      "5 đĩa"
    ],
    "answer": "B. 2 đĩa"
  },
  {
    "id": 13,
    "question": "Bạn là quản trị mạng của một Công ty lớn, bạn nhận được thông báo từ một số người sử dụng là không thể vào được Internet. Bạn mở cửa sổ trình duyệt trên máy của bạn và cũng nhận được thông báo tương tự khi truy nhập Internet. Bạn chạy \"Ipconfig\" từ cửa số lệnh để xác nhận các thiết lập TCP / IP trên máy tính của bạn, sử dụng lệnh \"ping\" và bạn vẫn có thể kết nối tới địa chỉ 172.16.0.2 đây là địa chỉ của một trong các máy chủ ở trong mạng của bạn. Bạn thử ping tên của một WebSite và nhận được thông báo lỗi sau: \"Ping request could not find host\". Bạn nên kiểm tra cái gì trước?",
    "options": [
      "Card mạng",
      "Switch",
      "Máy chủ DNS",
      "Máy chủ DHCP"
    ],
    "answer": "C. Máy chủ DNS"
  },
  {
    "id": 14,
    "question": "Nam đã đặt các hạn ngạch (quota) cho 250 người sử dụng trên một phân vùng của máy chủ sử dụng Windows Server 2008. Ba mươi người được cấp 10 MB, 45 người được 15 MB, 100 người được 30 MB, 25 người được 60 MB, và 50 người được 100 MB. Có thêm bốn máy chủ khác cũng yêu cầu các thiết lập về hạn ngạch giống như trên. Bạn hãy cho biết Nam có thể sử dụng cách nào dưới đây để đáp ứng được yêu cầu ở trên?",
    "options": [
      "Hạn ngạch được thiết lập bởi Group Policy. Nam cần phải đưa bốn máy chủ này vào trong cùng một OU",
      "Nam phải thực hiện việc này bằng cách sử dụng phần mềm của hãng thứ ba",
      "Trong phần Quota Entries, Nam phải chọn tất cả các thiết lập Quota của 250 người sử dụng này sau đó export ra file. Sau đó Nam copy file này tới các máy chủ còn lại và import vào phần Quota Entries của từng phân vùng mà Nam muốn áp dụng các thiết lập hạn ngạch như máy chủ ban đầu.",
      "Nam phải sử dụng Active Directory Users And Computers để thêm bốn máy chủ này vào cùng nhóm bảo mật hạn ngạch với máy chủ ban đầu mà Nam đã tạo ra"
    ],
    "answer": "C. Trong phần Quota Entries, Nam phải chọn tất cả các thiết lập Quota của 250 người sử dụng này sau đó export ra file. Sau đó Nam copy file này tới các máy chủ còn lại và import vào phần Quota Entries của từng phân vùng mà Nam muốn áp dụng các thiết lập hạn ngạch như máy chủ ban đầu."
  },
  {
    "id": 15,
    "question": "Trong chính sách mật khẩu, chính sách Account Lockout Duration là gì?",
    "options": [
      "Quy định số lần cố gắng đăng nhập trước khi tài khoản bị khóa",
      "quy định thời gian khóa tài khoản",
      "Quy định thời gian đếm lại số lần đăng nhập không thành công",
      "Cả 3 đáp án còn lại đều sai"
    ],
    "answer": "B. quy định thời gian khóa tài khoản"
  },
  {
    "id": 16,
    "question": "Mặc định khi tạo user account trên Windows Server 2008 domain controller thuộc nhóm nào?",
    "options": [
      "Domain Users",
      "Administrators",
      "Local User",
      "Power User"
    ],
    "answer": "A. Domain Users"
  },
  {
    "id": 17,
    "question": "Muốn cho các tập tin hay thư mục của Folder abc cho các user nào thì user đó quyền xóa thư mục con và tập tin thì ta làm việc gì?",
    "options": [
      "Bỏ dấu check Read Permission",
      "Bỏ dấu check Delete",
      "Bỏ dấu check Delete Subfolder and Files",
      "Bỏ dấu check Change Permissions"
    ],
    "answer": "C. Bỏ dấu check Delete Subfolder and Files"
  },
  {
    "id": 18,
    "question": "Domain Controller Security Policy với các tùy chỉnh trong đây sẽ tác động lên đâu?",
    "options": [
      "Tác động lên Local",
      "Tác động lên User trên Domain",
      "Tác động lên DC và User",
      "Tác động lên DC trên Domain"
    ],
    "answer": "D. Tác động lên DC trên Domain"
  },
  {
    "id": 19,
    "question": "Để cấp quyền cho người dùng có thể logon hệ thống mà không nhấn tổ hợp phím CTRL+ALT+DELETE, ta cấp quyền cho user quyền nào?",
    "options": [
      "Interactive logon: deny CTRL+ALT+DEL",
      "Interactive Logon: Dont require CTRL+ALT+DEL",
      "Interactive logon: cancel CTRL+ALT+DEL",
      "Cả 3 đáp án còn lại đề sai"
    ],
    "answer": "B. Interactive Logon: Dont require CTRL+ALT+DEL"
  },
  {
    "id": 20,
    "question": "Hệ điều hành nào không được nâng cấp lên Windows server 2008 Enterprise?",
    "options": [
      "Windows Server 2003 Enterprise (SP1)",
      "Windows Server 2003 R2 Tiêu chuẩn",
      "Windows Server 2003 Standard, gói dịch vụ 1 (SP2)",
      "Windows Server 2003 R2 Enterprise"
    ],
    "answer": "D. Windows Server 2003 R2 Enterprise"
  },
  {
    "id": 21,
    "question": "Tạo file screen áp dụng vào thư mục, dùng để:",
    "options": [
      "Ngăn chặn một số định dạng file lưu trữ vào thư mục.",
      "Cấp quyền truy cập thư mục cho tài khoản người dùng.",
      "Giới hạn dung lượng sử dụng của thư mục.",
      "Chỉ định các định dạng file trong thư mục được hiển thị trên màn hình desktop."
    ],
    "answer": "A. Ngăn chặn một số định dạng file lưu trữ vào thư mục."
  },
  {
    "id": 22,
    "question": "Bạn là quản trị mạng trong domain tdmu.edu.vn. Default Domain Policy được cấu hình như sau: Maximum password age = 30 days, Account lockout threshold = 1. Một user là U1 trở về sau kì công tác xa, do không nhớ password nên khi U1 log-on vào domain đã hiển thị thông báo sai password. Bạn đã reset password cho U1 nhưng anh ta vẫn không thể log-on được. Bạn sẽ làm gì để giải quyết ngay tình huống này?",
    "options": [
      "Unlock tài khoản người dùng của U1",
      "Restart máy tính của U1",
      "Reset password tài khoản máy tính của U1",
      "Tăng giá trị của thiết lập \"Maximum password age\" trong Default Domain Policy"
    ],
    "answer": "A. Unlock tài khoản người dùng của U1"
  },
  {
    "id": 23,
    "question": "Trong chính sách kiểm toán, chính sách Audit Object Access là gì?",
    "options": [
      "Ghi nhận các sự kiện liên quan đến quá trình Logon",
      "Ghi nhận việc truy cập các tập tin, thư mục và máy in",
      "Ghi nhận việc truy cập các dịch vụ thư mục",
      "Ghi nhận việc thay đổi trong chính sách kiểm toán"
    ],
    "answer": "B. Ghi nhận việc truy cập các tập tin, thư mục và máy in"
  },
  {
    "id": 24,
    "question": "Trong chính sách mật khẩu, chính sách Reset Account Lockout Counter After là gì?",
    "options": [
      "Quy định thời gian đếm lại số lần đăng nhập không thành công",
      "Quy định số lần cố gắng đăng nhập trước khi tài khoản bị khóa",
      "Quy định thời gian khóa tài khoản",
      "Cả 3 đáp án còn lại đều sai"
    ],
    "answer": "A. Quy định thời gian đếm lại số lần đăng nhập không thành công"
  },
  {
    "id": 25,
    "question": "Dịch vụ VPN có chức năng chính là gì?",
    "options": [
      "Tạo Email sử dụng qua Internet",
      "Tạo mạng riêng ảo thông qua mạng Internet",
      "Điều khiển máy tính từ xa",
      "Cấp địa chỉ IP tự động"
    ],
    "answer": "B. Tạo mạng riêng ảo thông qua mạng Internet"
  },
  {
    "id": 26,
    "question": "DNS (Domain Name System) Server là một máy chủ được dùng để:",
    "options": [
      "Phân giải (forward) tên máy thành địa chỉ IP và ngược lại (reverse).",
      "Phân giải ngược địa chỉ IP (reverse) thành tên máy.",
      "Phân giải IP của máy chủ thành IP của máy Client.",
      "Phân giải (forward) tên máy thành địa chỉ IP."
    ],
    "answer": "A. Phân giải (forward) tên máy thành địa chỉ IP và ngược lại (reverse)."
  },
  {
    "id": 27,
    "question": "Giao thức HTTP là:",
    "options": [
      "Giao thức tầng vận chuyển cho phép truyền tải các trang web",
      "Giao thức ứng dụng cho phép các máy tính giao tiếp với nhau qua Web có khả năng liên kết các trang Web với nhau",
      "Giao diện web",
      "Một thành phần của tên miền"
    ],
    "answer": "B. Giao thức ứng dụng cho phép các máy tính giao tiếp với nhau qua Web có khả năng liên kết các trang Web với nhau"
  },
  {
    "id": 28,
    "question": "Trong chính sách mật khẩu, mục Minimum password length dùng để:",
    "options": [
      "Quy định số ngày tối thiểu người dùng phải đổi mật khẩu.",
      "Thiết lập mật khẩu không cần độ phức tạp.",
      "Quy định số ký tự tối thiểu của mật khẩu.",
      "Quy định số ngày tối thiểu người dùng được phép đổi mật khẩu."
    ],
    "answer": "C. Quy định số ký tự tối thiểu của mật khẩu."
  },
  {
    "id": 29,
    "question": "File hệ thống nào sau đây được hỗ trợ bởi Windows Server 2008?",
    "options": [
      "Cả 3 đáp án còn lại đều đúng",
      "NTFS",
      "FAT32",
      "FAT16"
    ],
    "answer": "B. NTFS"
  },
  {
    "id": 30,
    "question": "Sau khi máy server nhận được thông tin xin IP của client thì máy server sẽ gửi gói tin gì ra?",
    "options": [
      "DHCPACK",
      "DHCPOFFER",
      "DHCPDISCOVER",
      "DHCPREQUEST"
    ],
    "answer": "B. DHCPOFFER"
  },
  {
    "id": 31,
    "question": "Bạn là thành viên của ba nhóm SinhVien, GiaoVien, HocSinh. Nhóm SinhVien có quyền Read đối với thư mục C:\\DATA, nhóm GiaoVien có quyền Modify, nhóm HocSinh có quyền No Access, bạn có quyền Write. Quyền thực thi của bạn đối với thư mục C:\\DATA?",
    "options": [
      "No Access",
      "Write",
      "Read",
      "Modify"
    ],
    "answer": "D. Modify"
  },
  {
    "id": 32,
    "question": "Hệ điều hành nào được nâng cấp lên Windows server 2008 Standard",
    "options": [
      "Windows Server 2003 R2 Datacenter",
      "Windows Server 2003 R2 Standard",
      "Windows Server 2003 R2 Enterprise",
      "Windows Server 2003 Enterprise (SP1)"
    ],
    "answer": "B. Windows Server 2003 R2 Standard"
  },
  {
    "id": 33,
    "question": "Windows Server 2008 sử dụng giao thức nào?",
    "options": [
      "AppleTalk",
      "NetBEUI",
      "TCP/IP",
      "IPX"
    ],
    "answer": "C. TCP/IP"
  },
  {
    "id": 34,
    "question": "Để một user thuộc nhóm Domain Users có thể đăng nhập cục bộ vào máy Domain Controller thì trong chính sách hệ thống (User Rights), Anh/ Chị phải cấp quyền gì cho user đó?",
    "options": [
      "Allow logon throughs Terminal services",
      "Allow logon locally",
      "Deny logon locally",
      "Allow logon local computer"
    ],
    "answer": "B. Allow logon locally"
  },
  {
    "id": 35,
    "question": "Bạn lắp thêm vào máy chủ Windows Server 2008 của bạn ba ổ cứng mới, sau khi lắp xong bạn bật máy và đăng nhập bằng tài khoản có quyền quản trị và mở Console Disk Management. Khi vừa mở ra bạn sẽ thấy xuất hiện Initialize And Convert Disk Wizard. Bạn hãy cho biết bạn có thể làm gì trong Wizard này với các ổ cứng mới vừa được lắp thêm vào?",
    "options": [
      "Tạo ra Extended partition",
      "Tạo ra Primary Partition",
      "Tạo RAID-5 Volume",
      "Khởi tạo (Initialize) đĩa mới"
    ],
    "answer": "D. Khởi tạo (Initialize) đĩa mới"
  },
  {
    "id": 36,
    "question": "Bạn là quản trị mạng cho một tổ chức, bạn phải sử dụng các công cụ để giám sát tình trạng sử dụng mạng tại tổ chức của bạn nhằm đảm bảo nó vẫn hoạt động bình thường theo đúng thiết kế của mạng. Công cụ nào sẽ giúp bạn gửi cảnh báo (alert) khi tình trạng sử dụng mạng vượt quá 85%?",
    "options": [
      "Network Monitor",
      "Performances log and Alerts",
      "Performances Monitor",
      "Event Viewer"
    ],
    "answer": "B. Performances log and Alerts"
  },
  {
    "id": 37,
    "question": "Một người quản trị mạng cấu hình hạn ngạch đĩa (disk Quota) để giới hạn lại dung lượng đĩa cho mọi người dùng là 500MB trên ổ đĩa D: tuy nhiên đối với một số trường hợp đặc biệt như giám đốc hoặc trưởng phòng thì nhu cầu cần lưu dữ liệu cao hơn so với hạn ngạch mà người quản trị đã định. Trong trường hợp này người quản trị làm gì?",
    "options": [
      "Không thể định Quata đặc biệt cho một user cụ thể nào",
      "Mở propertities của ổ đĩa D: sau đó chọn tab Quota, nhấp vào nút Quata entries... Sau đó nhấp đôi chuột vào user mà bạn không muốn giới hạn Quota và chọn Do not limit disk usage",
      "Những người nào mà bạn không muốn quy định hạn ngạch đĩa thì cho họ lưu dữ liệu trên các partition khác trên server vd: Ổ đĩa E: và partition đó được định dạng là FAT32",
      "Không quy định hạn ngạch đĩa nữa"
    ],
    "answer": "B. Mở propertities của ổ đĩa D: sau đó chọn tab Quota, nhấp vào nút Quata entries... Sau đó nhấp đôi chuột vào user mà bạn không muốn giới hạn Quota và chọn Do not limit disk usage"
  },
  {
    "id": 38,
    "question": "Ta có folder data áp cho các user chịu các permission của Share là Read và NTFS là Write thì những user đó chịu quyền gì?",
    "options": [
      "Write",
      "Không được truy cập (rỗng)",
      "Full Control",
      "read"
    ],
    "answer": "B. Không được truy cập (rỗng)"
  },
  {
    "id": 39,
    "question": "Công cụ nào có chức năng tạo và quản lý các đối tượng cơ bản của hệ thống Active Directory?",
    "options": [
      "Active Directory users and computers",
      "Active Directory domain and trust",
      "Computer Management",
      "Active Directory Sites and services"
    ],
    "answer": "A. Active Directory users and computers"
  },
  {
    "id": 40,
    "question": "Nam đang thiết lập quyền NTFS trên thư mục D:\\DATA cho nhóm Managers. Anh ấy muốn nhóm Manager Group được phép liệt kê nội dung của thư mục và đọc dữ liệu của các files trong thư mục. Anh ấy không muốn bất kì ai trong nhóm thay đổi hoặc xóa bất kì dữ liệu nào. Quyền NTFS nào nên được anh ấy cung cấp?",
    "options": [
      "Modify",
      "Full control",
      "Write",
      "Read"
    ],
    "answer": "D. Read"
  },
  {
    "id": 41,
    "question": "Sử dụng dịch vụ nào sau đây để phân giải tên miền sang địa chỉ IP?",
    "options": [
      "WINS",
      "FIP",
      "DHCP",
      "DNS"
    ],
    "answer": "D. DNS"
  },
  {
    "id": 42,
    "question": "Đại là quản trị hệ thống của công ty ABC, công ty có một máy chủ với hệ điều hành Windows Server 2008 và cài đặt SQL Server 2012. Máy chủ này có 4 ổ cứng SCSI, ổ cứng đầu tiên được sử dụng để chứa hệ điều hành và các phần mềm ứng dụng. Ba ổ cứng còn lại được sử dụng để tạo ra RAID-5 volume, chứa các cơ sở dữ liệu trên máy chủ này. Hiện tại volume này đã được sử dụng 40%, một trong ba đĩa của RAID-5 volume này bị hỏng. Bạn hãy cho biết trong các phát biểu dưới đây về tình huống này, phát biểu nào là đúng?",
    "options": [
      "Máy chủ sẽ bị tạm dừng, và chỉ hoạt động khi ổ đĩa cứng hỏng được thay thế",
      "Máy chủ sẽ tiếp tục hoạt động và dữ liệu sẽ không bị mất",
      "Sau khi RAID-5 volume được kích hoạt trở lại (reactivate), máy chủ sẽ tiếp tục hoạt động. Dữ liệu mới không thể ghi vào RAID-5 volume này, nhưng các dữ liệu hiện thời có thể đọc và sao lưu (backup)",
      "Tất cả dữ liệu sẽ bị mất, để có khả năng chịu lỗi bạn phải sử dụng striped volume thay cho RAID-5 volume"
    ],
    "answer": "B. Máy chủ sẽ tiếp tục hoạt động và dữ liệu sẽ không bị mất"
  },
  {
    "id": 43,
    "question": "Bạn là người quản trị mạng muốn tạo ra một số user chỉ hoạt động với một số quyền hạn nào đó. Bạn phải tạo ra các user như thế nào để thuận lợi cho việc quản lý của mình.",
    "options": [
      "Tạo ra các user và phân quyền đặc trưng cho các user đó.",
      "Tạo ra một Organizational Units (OU) và tạo các user trong OU đó.",
      "Tạo các user và gán cho các user vào nhóm administrators.",
      "Tạo một Organizational Units (OU) và tạo một Group trong OU này, sau đó tạo các user trong OU này và đồng thời add các user vào Group."
    ],
    "answer": "D. Tạo một Organizational Units (OU) và tạo một Group trong OU này, sau đó tạo các user trong OU này và đồng thời add các user vào Group."
  },
  {
    "id": 44,
    "question": "Bộ lọc IPsec dựa trên yếu tố nào?",
    "options": [
      "Theo số hiệu cổng và kiểu cổng",
      "Địa chỉ IP, subnet hoặc tên DNS của máy đích",
      "Cả 3 đáp án còn lại đều đúng",
      "Địa chỉ IP, subnet hoặc tên DNS của máy nguồn"
    ],
    "answer": "D. Địa chỉ IP, subnet hoặc tên DNS của máy nguồn"
  },
  {
    "id": 45,
    "question": "Dữ liệu được lưu trữ trên từng đĩa với lưu lượng giống nhau là cấu hình loại Volume nào?",
    "options": [
      "Volume Spanned",
      "Volume Striped (Raid 0)",
      "Volume Mirrored (Raid 1)",
      "Volume Simple"
    ],
    "answer": "C. Volume Mirrored (Raid 1)"
  },
  {
    "id": 46,
    "question": "Bạn có một máy chủ với bốn ổ cứng SCSI, ổ đĩa thứ nhất được mirror với ổ đĩa thứ ba, ổ đĩa thứ hai được mirror với ổ đĩa thứ tư. Giả sử ổ đĩa thứ tư bị hỏng, bạn sẽ phải làm gì để khôi phục lại khả năng chịu lỗi của hệ thống?",
    "options": [
      "Bạn phải tháo ổ cứng hỏng, lắp đặt ở cứng mới và break mirror giữa ổ đĩa cứng thứ nhất và thứ ba",
      "Bạn phải break mirror giữa ổ đĩa thứ nhất và thứ ba trước khi lắp đặt đĩa cứng thay thế",
      "Bạn phải break mirror giữa ổ đĩa thứ hai và thứ tư trước khi lắp đặt đĩa cứng thay thế",
      "Bạn phải tạo lại mirror giữa ổ cứng thứ nhất và ổ cứng mới sau khi cài đặt xong ổ cứng mới này"
    ],
    "answer": "C. Bạn phải break mirror giữa ổ đĩa thứ hai và thứ tư trước khi lắp đặt đĩa cứng thay thế"
  },
  {
    "id": 47,
    "question": "Hyper-V được thiết kế dựa trên công nghệ ảo hóa hypervisor (hypervisor-based virtualization technology), cho phép tạo máy ảo chạy độc lập nhưng:",
    "options": [
      "Tất cả các máy ảo cùng chia sẻ một nền tảng phần cứng và phần mềm.",
      "Mỗi máy ảo sẽ sử dụng một phần cứng riêng.",
      "Các máy ảo chỉ chia sẻ phần mềm.",
      "Tất cả các máy ảo cùng chia sẻ một nền tảng phần cứng."
    ],
    "answer": "D. Tất cả các máy ảo cùng chia sẻ một nền tảng phần cứng."
  },
  {
    "id": 48,
    "question": "Trong chính sách mật khẩu của server 2008 thì chính sách \"Maximum password age\" mặc nhiên quy định sau bao nhiêu ngày phải đổi password?",
    "options": [
      "42",
      "44",
      "46",
      "48"
    ],
    "answer": "A. 42"
  },
  {
    "id": 49,
    "question": "Bạn lắp thêm vào máy chủ Windows Server của bạn ba ổ cứng mới, sau khi lắp xong bạn bật máy và đăng nhập bằng tài khoản có quyền quản trị và mở Console Disk Management. Khi vừa mở ra bạn sẽ thấy xuất hiện Initialize And Convert Disk Wizard. Bạn hãy cho biết bạn có thể làm gì trong Wizard này với các ổ cứng mới vừa được lắp thêm vào?",
    "options": [
      "Tạo ra Primary Partition",
      "Khởi tạo (Initialize) đĩa mới",
      "Tạo RAID-5 Volume",
      "Tạo phân vùng mở rộng"
    ],
    "answer": "B. Khởi tạo (Initialize) đĩa mới"
  },
  {
    "id": 50,
    "question": "Ta có folder data áp cho các user chịu các permission của Share là Change và NTFS là Write thì những user đó chịu quyền gì?",
    "options": [
      "Full Control",
      "Write",
      "Read",
      "Không được truy cập (rỗng)"
    ],
    "answer": "B. Write"
  },
  {
    "id": 51,
    "question": "Hiển thị button shutdown tại màn hình của user thì ta làm sao?",
    "options": [
      "Configuration Computer / Admin template / templete / system / display shutdown / disable",
      "Configuration User / Admin template / templete / system / display shutdown / enable",
      "Configuration Computer / Admin template / templete / system / auto play policies / enable",
      "Configuration Computer / Admin template / templete / system / display shutdown / enable"
    ],
    "answer": "D. Configuration Computer / Admin template / templete / system / display shutdown / enable"
  },
  {
    "id": 52,
    "question": "Account Policy được dùng để chỉ định các thông số nào?",
    "options": [
      "Chỉ định thông số về tài khoản người dùng",
      "Chỉ định thông số về thông tin AD",
      "Chỉ định thông số và bản quyền DC",
      "Chỉ định thông số về cấu hình DC"
    ],
    "answer": "A. Chỉ định thông số về tài khoản người dùng"
  },
  {
    "id": 53,
    "question": "Hỗ trợ chính sách mã hóa là định dạng đĩa nào?",
    "options": [
      "FAT16",
      "FA132",
      "Cả 3 đều sai",
      "NTFS"
    ],
    "answer": "D. NTFS"
  },
  {
    "id": 54,
    "question": "Khi cài đặt printer thì everyone được mặc định gán quyền gì?",
    "options": [
      "Không có quyền",
      "Manage printer",
      "Manage documents",
      "Print"
    ],
    "answer": "D. Print"
  },
  {
    "id": 55,
    "question": "Dữ liệu được lưu trữ tuần tự trên từng đĩa là cấu hình loại Volume nào?",
    "options": [
      "Volume Simple",
      "Volume Spaned",
      "Volume Mirrored (Raid 1)",
      "Volume Striped ( Raid 0)"
    ],
    "answer": "D. Volume Striped ( Raid 0)"
  },
  {
    "id": 56,
    "question": "Đối với server 2008 dung lượng RAM khuyến khích (Recommended) là bao nhiêu GB?",
    "options": [
      "3GB",
      "512MB",
      "1BG",
      "2GB"
    ],
    "answer": "D. 2GB"
  },
  {
    "id": 57,
    "question": "Hãy cho biết giao thức được sử dụng để gửi mail?",
    "options": [
      "SMTP",
      "FTP",
      "POP3",
      "HTTP"
    ],
    "answer": "A. SMTP"
  },
  {
    "id": 58,
    "question": "Muốn giấu biểu tượng Recycle Bin trên màn hình Desktop ta thực hiện?",
    "options": [
      "User Configuration /Administrator Templates /Desktop / Remove Recycle Bin icon from desktop/Not Configured",
      "Cả 3 đáp án đều sai",
      "User Configuration /Administrator Templates /Desktop / Remove Recycle Bin icon from desktop/disble",
      "User Configuration /Administrator Templates /Desktop / Remove Recycle Bin icon from desktop/enable"
    ],
    "answer": "D. User Configuration /Administrator Templates /Desktop / Remove Recycle Bin icon from desktop/enable"
  },
  {
    "id": 59,
    "question": "Muốn chặn một dãy IP nào không muốn cấp cho client thì ta làm sao?",
    "options": [
      "Cấu hình trong Exclusion Range",
      "Cấu hình trong Feature",
      "Cấu hình trong Role",
      "Cấu hình trong Address"
    ],
    "answer": "A. Cấu hình trong Exclusion Range"
  },
  {
    "id": 60,
    "question": "Bạn đang cấu hình Sharing Permission cho một thư mục chia sẻ trên File server. Bạn muốn nhóm Authenticated Users có khả năng đọc các tệp tin trong thư mục, và riêng những tệp tin mà là chủ sở hữu thì họ có thể sửa nội dung hay xóa đi. Bạn sẽ cấp phép như nào?",
    "options": [
      "Authenticated Users - Read",
      "Authenticated Users - Read",
      "Authenticated Users - Read",
      "Create Owner - Change"
    ],
    "answer": "D. Create Owner - Change"
  },
  {
    "id": 61,
    "question": "Trong chính sách kiểm toán, chính sách Audit Logon Events là gì?",
    "options": [
      "Ghi nhận việc thay đổi trong chính sách kiểm toán",
      "Ghi nhận việc truy cập các dịch vụ thư mục",
      "Ghi nhận các sự kiện liên quan đến quá trình Logon",
      "Ghi nhận việc truy cập các tập tin, thư mục và máy in"
    ],
    "answer": "C. Ghi nhận các sự kiện liên quan đến quá trình Logon"
  },
  {
    "id": 62,
    "question": "Để bắt đầu quản lý Web Server, bạn vào start / programs / administrative tools, chọn",
    "options": [
      "Web server manager",
      "Internet information services (IIS) manager",
      "Password Account Policy",
      "Password Domain Policy"
    ],
    "answer": "B. Internet information services (IIS) manager"
  },
  {
    "id": 63,
    "question": "Để cho phép Read-Only Domain Controller server có thể đồng bộ mật khẩu với Domain Controller chính, bạn cần cấu hình?",
    "options": [
      "Password Replication Policy",
      "Password Group Policy",
      "Password Account Policy",
      "Password Domain Policy"
    ],
    "answer": "A. Password Replication Policy"
  },
  {
    "id": 64,
    "question": "Trong chính sách kiểm toán, chính sách Audit Policy Change là gì?",
    "options": [
      "Ghi nhận các sự kiện liên quan đến quá trình Logon",
      "Ghi nhận việc truy cập các dịch vụ thư mục",
      "Ghi nhận việc thay đổi trong chính sách kiểm toán",
      "Ghi nhận việc truy cập các tập tin, thư mục và máy in"
    ],
    "answer": "C. Ghi nhận việc thay đổi trong chính sách kiểm toán"
  },
  {
    "id": 65,
    "question": "Tài khoản có tên là Administrator là tài khoản gì trên hệ điều hành windows?",
    "options": [
      "Tài khoản cài đặt máy tính",
      "Tài khoản user thông thường",
      "Tài khoản quản trị máy tính",
      "Tài khoản để cứu hộ máy tính"
    ],
    "answer": "C. Tài khoản quản trị máy tính"
  },
  {
    "id": 66,
    "question": "Domain tree là gì?",
    "options": [
      "Là cấu trúc bao gồm nhiều domain được sắp xếp các cấp bậc theo cấu trúc hình cây.",
      "Là cấu trúc bao gồm nhiều domain được sắp xếp các cấp bậc theo cấu trúc hình gấp khúc.",
      "Là cấu trúc bao gồm nhiều domain được sắp xếp các cấp bậc theo cấu trúc hình tròn.",
      "Là cấu trúc bao gồm nhiều domain được sắp xếp các cấp bậc theo cấu trúc hình vuông."
    ],
    "answer": "A. Là cấu trúc bao gồm nhiều domain được sắp xếp các cấp bậc theo cấu trúc hình cây."
  },
  {
    "id": 67,
    "question": "Bạn muốn xem địa chỉ MAC (địa chỉ vật lý) của card mạng, bạn nên làm gì?",
    "options": [
      "Vào DOS, gõ lệnh Net view \\\\server1",
      "Từ Device Manager snap-in, xem properties của card mạng",
      "Từ services snap-in, xem properties của card kết nối",
      "Vào DOS, gõ lệnh Ipconfig \\all"
    ],
    "answer": "D. Vào DOS, gõ lệnh Ipconfig \\all"
  },
  {
    "id": 68,
    "question": "Record MX dùng làm gì?",
    "options": [
      "Dùng để backup",
      "Dùng cho dịch vụ FTP",
      "Cho dịch vụ chuyển mail",
      "Cho dịch vụ chuyển gói tin"
    ],
    "answer": "C. Cho dịch vụ chuyển mail"
  },
  {
    "id": 69,
    "question": "Để kết nối (join) các máy trạm trong hệ thống mạng nội bộ vào domain, bạn thực hiện?",
    "options": [
      "Chọn start, chọn RUN, gõ lệnh CMD, nhấn OK, gõ tiếp lệnh DCPROMO vào cửa sổ CMD và nhấn Enter.",
      "Kích chuột phải vào biểu tượng My Computer, chọn Properties, trên tab Computer Name, chọn Change, nhập tên domain vào mục Workgroup, chọn OK, nhập tên và mật khẩu của tài khoản Administrator của máy domain, chọn OK.",
      "Chọn start, chọn RUN, gõ lệnh DCPROMO vào cửa sổ RUN và nhấn Enter.",
      "Kích chuột phải vào biểu tượng My Computer, chọn Properties, trên tab Computer Name, chọn Change, nhập tên domain vào mục Domain, chọn OK, nhập tên và mật khẩu của tài khoản Administrator của máy domain, chọn OK."
    ],
    "answer": "D. Kích chuột phải vào biểu tượng My Computer, chọn Properties, trên tab Computer Name, chọn Change, nhập tên domain vào mục Domain, chọn OK, nhập tên và mật khẩu của tài khoản Administrator của máy domain, chọn OK."
  },
  {
    "id": 70,
    "question": "Cơ chế chứng thực chính nào được dùng vào máy phục vụ Web an toàn?",
    "options": [
      "SSL/TLS",
      "L2TP",
      "PPTP",
      "STPP"
    ],
    "answer": "A. SSL/TLS"
  },
  {
    "id": 71,
    "question": "Domain Security Policy các tùy chỉnh trong này sẽ tác động lên đâu?",
    "options": [
      "Tác động lên DC trên Domain",
      "Tác động lên DC và User trên Domain",
      "Tác động lên Local",
      "Tác động lên User trên Domain"
    ],
    "answer": "D. Tác động lên User trên Domain"
  },
  {
    "id": 72,
    "question": "Any quên mật khẩu truy nhập vào sau khi đăng nhập vài lần với mật khẩu sai, Any nhận được thông báo tài khoản đã bị vô hiệu hóa (disable) hoặc khóa (lock out). Thông báo này nhắc Any phải hỏi người quản trị. Người quản trị sẽ làm gì để giúp Any",
    "options": [
      "Đổi tên tài khoản Any",
      "Mở khóa (unlock) tài khoản của Any",
      "Đặt lại mật khẩu của Any",
      "Xóa tài khoản của Any và tạo lại"
    ],
    "answer": "B. Mở khóa (unlock) tài khoản của Any"
  },
  {
    "id": 73,
    "question": "Để cập nhật tất cả thông tin vào Group Policy. Bạn thực hiện câu lệnh nào sau đây",
    "options": [
      "Run / cmd, gõ groupupdate /force",
      "Run / cmd, gõ gpupdate /force",
      "Run / cmd, gõ gpoupdate /force",
      "Run / cmd, gõ update /force"
    ],
    "answer": "B. Run / cmd, gõ gpupdate /force"
  },
  {
    "id": 74,
    "question": "Muốn gán một địa chỉ IP cho một máy tính cố định nào đó thì ta cấu hình ở đâu?",
    "options": [
      "Role",
      "Exclusion Range",
      "Reservation",
      "Feature"
    ],
    "answer": "C. Reservation"
  },
  {
    "id": 75,
    "question": "Để đưa user KT1 đã tạo trước đó vào OU KeToan, bạn thực hiện",
    "options": [
      "Chuột phải vào KT1 / Chọn Move .../ Xuất hiện hộp thoại, chọn đến OU KeToan / chọn OK.",
      "Chuột phải vào KT1 / Chọn Add to a group .../ Xuất hiện hộp thoại, gõ vào KeToan / Chọn Check Names / chọn OK.",
      "Chuột phải vào KT1 / Chọn Copy .../ Xuất hiện hộp thoại, chọn đến OU KeToan / chọn OK.",
      "Chuột phải vào group KeToan / Properties / Members / Add / Xuất hiện hộp thoại, gõ vào KT1 / Chọn Check Names / chọn ΟΚ."
    ],
    "answer": "A. Chuột phải vào KT1 / Chọn Move .../ Xuất hiện hộp thoại, chọn đến OU KeToan / chọn OK."
  },
  {
    "id": 76,
    "question": "Số máy windows 2008 Server làm Domain Controller tối đa trong một domain là?",
    "options": [
      "Cả 3 đáp án còn lại đều sai",
      "3",
      "1",
      "2"
    ],
    "answer": "A. Cả 3 đáp án còn lại đều sai"
  },
  {
    "id": 77,
    "question": "Bạn là quản trị mạng của một tổ chức. Tổ chức đang chuẩn bị triển khai một tường lửa để cung cấp một kết nối an toàn giữa mạng bên trong và Internet. Nhân viên an ninh cho tổ chức đặc biệt quan tâm về sự tấn công của các virus mới nhất. Bạn cần đảm bảo rằng tường lửa của bạn có thể ngăn chặn các kiểu tấn công này. Chức năng nào của tường lửa sẽ cần để cài đặt để ngăn chặn các kiểu tấn công này? :",
    "options": [
      "Application filtering (lọc ứng dụng)",
      "Packet filtering (lọc gói)",
      "Stateful filtering (lọc trạng thái)",
      "Intrusion detection (phát hiện xâm nhập)"
    ],
    "answer": "A. Application filtering (lọc ứng dụng)"
  },
  {
    "id": 78,
    "question": "Mục nào trong Group Policy cho phép khóa 1 User hoặc 1 Group Local không cho Login vào windows :",
    "options": [
      "Account lock out duration",
      "Deny logon locally",
      "Deny logon through Terminal Services",
      "Deny logon as a services"
    ],
    "answer": "B. Deny logon locally"
  },
  {
    "id": 79,
    "question": "Silas muốn tạo một tài khoản user cục bộ trên máy tính windows 7. Anh cần sử dụng công cụ gì :",
    "options": [
      "Computer Manager",
      "Local Users and Groups",
      "Active Directory Users and Groups",
      "User Manager"
    ],
    "answer": "B. Local Users and Groups"
  },
  {
    "id": 80,
    "question": "IP security hoạt động ở tầng thứ mấy của mô hình OSI :",
    "options": [
      "3",
      "2",
      "5",
      "4"
    ],
    "answer": "A. 3"
  },
  {
    "id": 81,
    "question": "Để cài đặt IIS 7.0 Web server, bạn nhớ cửa sổ server manager. Trong khung Roles Summary, bấm Add Roles, trong màn hình Select Server Roles, chọn:",
    "options": [
      "UDDI Server",
      "Windows deployment server",
      "Application",
      "Web server (IIS)"
    ],
    "answer": "D. Web server (IIS)"
  },
  {
    "id": 82,
    "question": "Trong chính sách mật khẩu của server 2008 thì chính sách “Enforce password history” sẽ lưu trữ tối đa bao nhiêu password cũ?",
    "options": [
      "26",
      "28",
      "30",
      "24"
    ],
    "answer": "D. 24"
  },
  {
    "id": 83,
    "question": "Số lượng đĩa tối thiểu cho phép tạo một RAID 5 - Volume?",
    "options": [
      "3",
      "32",
      "1",
      "2"
    ],
    "answer": "A. 3"
  },
  {
    "id": 84,
    "question": "Trong chính sách kiểm toán, chính sách Audit Directory Server Access là gì?",
    "options": [
      "Ghi nhận việc truy cập các tập tin, thư mục và máy in",
      "Ghi nhận việc truy cập các dịch vụ thư mục",
      "Ghi nhận các sự kiện liên quan đến quá trình Logon",
      "Ghi nhận việc thay đổi trong chính sách kiểm toán"
    ],
    "answer": "B. Ghi nhận việc truy cập các dịch vụ thư mục"
  },
  {
    "id": 85,
    "question": "Trong cơ chế hoạt động của DHCP khi máy client muốn xin IP thì nó gửi gói tin gì ra?",
    "options": [
      "DHCPREQUEST",
      "DHCPOFFER",
      "DHCPACK",
      "DHCPDISCOVER"
    ],
    "answer": "D. DHCPDISCOVER"
  },
  {
    "id": 86,
    "question": "Hãy cho biết giao thức được sử dụng nhận mail?",
    "options": [
      "HTTP",
      "SMTP",
      "POP3",
      "RDP"
    ],
    "answer": "C. POP3"
  },
  {
    "id": 87,
    "question": "Giới hạn tài khoản user có password trắng đăng nhập, là chính sách nào dưới đây?",
    "options": [
      "Account rename guest account",
      "Interactive logon: do not display last username",
      "Cả 3 đáp án còn lại đều sai",
      "Account: limit account use of blank passwords to console logon only."
    ],
    "answer": "D. Account: limit account use of blank passwords to console logon only."
  },
  {
    "id": 88,
    "question": "Muốn giới hạn thời gian user được phép đăng nhập vào hệ thống mạng (mặc định đăng nhập 24/24), bạn thực hiện?",
    "options": [
      "Nhấp đôi chuột lên user vừa tạo để mở hộp thoại Properties, chọn tab Account, bấm nút Logon Days",
      "Nhấp đôi chuột lên user vừa tạo để mở hộp thoại Properties, chọn tab Account, bấm nút Log on to",
      "Nhấp đôi chuột lên user vừa tạo để mở hộp thoại Properties, chọn tab Account, bấm nút Login Hours",
      "Nhấp đôi chuột lên user vừa tạo để mở hợp Properties, chọn tab Account, bấm nút Logon Hours"
    ],
    "answer": "D. Nhấp đôi chuột lên user vừa tạo để mở hợp Properties, chọn tab Account, bấm nút Logon Hours"
  },
  {
    "id": 89,
    "question": "Sau khi tạo OU có tên Nhanvien trên máy chủ window 2008 domain controller. Anh / chị muốn tạo account “minhnv” và Account này sẽ thuộc OU Nhanvien. Mở công cụ active Directory User and Computer và thực hiện như thế nào?",
    "options": [
      "Nhấp chuột phải vào OU Nhanvien chọn New / Group",
      "Nhấp chuột phải vào OU Nhanvien chọn New / organizational Unit",
      "Nhấp chuột phải vào OU Nhanvien chọn New / User",
      "Cả 3 đều sai"
    ],
    "answer": "C. Nhấp chuột phải vào OU Nhanvien chọn New / User"
  },
  {
    "id": 90,
    "question": "Trong chính sách mật khẩu, chính sách Account Lockout threshold là gì?",
    "options": [
      "Quy định số lần cố gắng đăng nhập trước khi tài khoản bị khóa",
      "Quy định thời gian đếm lại số lần đăng nhập không thành công",
      "Quy định thời gian khóa tài khoản",
      "Quy định thời gian từ lần đăng nhập mật khẩu sai này tới lần nhập mật khẩu tiếp theo"
    ],
    "answer": "A. Quy định số lần cố gắng đăng nhập trước khi tài khoản bị khóa"
  },
  {
    "id": 91,
    "question": "Để bổ sung các user vào group vừa tạo, bạn nhấp đôi chuột lên group tương ứng để mở hộp thoại Properties, sau đó:",
    "options": [
      "Mở cửa sổ DNS Server bằng cách vào Start / Programs / Administrative Tools / chọn DNS. Kích chuột phải lên mục Forward Lookup Zones, chọn New Zone.",
      "Mở cửa sổ DNS Server bằng cách vào Start / Programs / Administrative Tools / chọn DNS / Chọn Zone. Kích chuột phải lên Zone, chọn new Alias.",
      "Trên tab member / chọn Add",
      "Nhân giữ user và khéo thẻ vào hộp thoại properties"
    ],
    "answer": "C. Trên tab member / chọn Add"
  },
  {
    "id": 92,
    "question": "Để cấu hình DNS Server chính (phân giải địa chỉ IP thành tên), bạn thực hiện",
    "options": [
      "Mở cửa sổ DNS Server bằng cách vào Start / Programs / Administrative Tools / chọn DNS. Kích chuột phải lên mục Forward Lookup Zones, chọn New Zone.",
      "Mở cửa sổ DNS Server bằng cách vào Start / Programs / Administrative Tools / chọn DNS / Chọn Zone. Kích chuột phải lên Zone, chọn new Alias.",
      "Mở cửa sổ DNS Server bằng cách vào Start / Programs / Administrative Tools / chọn DNS / Chọn Zone. Kích chuột phải lên Zone, chọn new Host.",
      "Mở cửa sổ DNS Server bằng cách vào Start / Programs / Administrative Tools / chọn DNS. Kích chuột phải lên mục Reverse Lookup Zones, chọn New Zone."
    ],
    "answer": "D. Mở cửa sổ DNS Server bằng cách vào Start / Programs / Administrative Tools / chọn DNS. Kích chuột phải lên mục Reverse Lookup Zones, chọn New Zone."
  },
  {
    "id": 93,
    "question": "Hai tài khoản user cục bộ nào tự động được tạo ra khi cài windows 7",
    "options": [
      "Administrator và Power User",
      "Administrators và Guests",
      "Administrators và Power Users",
      "Administrators và Guest"
    ],
    "answer": "D. Administrators và Guest"
  },
  {
    "id": 94,
    "question": "Bạn vô tình xóa mất một OU trong Active Directory, tuy nhiên bạn đã Backup System State trên một máy Domain Controller trong mạng. Bạn hãy cho biết bạn sẽ làm thế nào trên Domain Controller này để có thể khôi phục được OU bị xóa mất ở trên?",
    "options": [
      "Khởi động lại Domain controller một cách bình thường",
      "Khởi động lại domain controller và chọn Recovery Console",
      "Khởi động lại domain controller và chọn vào Safe mode",
      "Khởi động lại domain controller và chọn vào Directory Services Restore mode"
    ],
    "answer": "D. Khởi động lại domain controller và chọn vào Directory Services Restore mode"
  },
  {
    "id": 95,
    "question": "Hệ thống file nào sau đây cho phép bảo mật nội bộ?",
    "options": [
      "HPFS",
      "FAT32",
      "FAT16",
      "NTFS"
    ],
    "answer": "D. NTFS"
  },
  {
    "id": 96,
    "question": "Dịch vụ DNS server có chức năng chính là gì?",
    "options": [
      "Phân giải tên netbios",
      "Phân giải địa chỉ MAC",
      "Cả 3 đáp án còn lại đều sai",
      "Phân giải tên miền (IP sang tên và ngược lại)"
    ],
    "answer": "D. Phân giải tên miền (IP sang tên và ngược lại)"
  },
  {
    "id": 97,
    "question": "Để đưa user KT1 vào group KeToan, bạn thực hiện",
    "options": [
      "Chuột phải vào group KeToan /Properties /Members of / Add / Xuất hiện hộp thoại, gõ vào KT1 / chọn Check Names / Chọn OK.",
      "Chuột phải vào KT1 / Chọn copy …/ Xuất hiện hộp thoại, chọn đến group KeToan / chọn OK",
      "Chuột phải vào KT1 / Chọn Move…/ Xuất hiện hộp thoại, chọn đến group KeToan / chọn OK",
      "Chuột phải vào user KT1 / Chọn Add to a group …/ Xuất hiện hộp thoại, gõ vào KeToan / chọn Check Names / chọn OK."
    ],
    "answer": "D. Chuột phải vào user KT1 / Chọn Add to a group …/ Xuất hiện hộp thoại, gõ vào KeToan / chọn Check Names / chọn OK."
  },
  {
    "id": 98,
    "question": "Bạn cài đặt và cấu hình máy chủ DNS mới trong domain và bạn quyết định các máy trạm sẽ sử dụng máy chủ mới này. Trên máy chủ DHCP bạn cấu hình lại Scope Option 006 chỉ vào máy chủ mới. Bạn sử dụng lệnh ipconfig / release và ipconfig / renew trên tất cả các máy trạm sau đó sử dụng lệnh ipconfig / all để kiểm tra lại và nhận được kết quả như sau. Có hai máy trạm không nhận được địa chỉ DNS Server mới này, các máy trạm còn lại đã nhận được. Trên hai máy trạm vẫn sử dụng máy chủ DNS cũ này, bạn kiểm tra cấu hình TCP / IP trên kết nối cục bộ (Local Area Connection) bạn nhận thấy cả hai đều được cấu hình để nhận địa chỉ một cách tự động. Bạn sẽ phải làm gì tiếp theo?",
    "options": [
      "Cấu hình hai máy trạm nhận địa chỉ của máy chủ DNS một cách thủ công (manual) và nhập vào địa chỉ IP của máy chủ DNS mới",
      "Cấu hình lại server option 006",
      "Cấu hình lại Reserved Client Option 006 của hai máy trạm, sau đó chạy lại lệnh ipconfig /release và ipconfig /renew",
      "Chạy lệnh ipconfig /flushdns trên hai máy trạm này"
    ],
    "answer": "C. Cấu hình lại Reserved Client Option 006 của hai máy trạm, sau đó chạy lại lệnh ipconfig /release và ipconfig /renew"
  },
  {
    "id": 99,
    "question": "Người dùng bị quên mật khẩu nhưng lại cố tình đăng nhập nhiều lần với mật khẩu sai. Rốt cục người dùng nhận được một thông báo tài khoản đã bị vô hiệu hóa hoặc bị khóa và đề nghị liên hệ với quản trị mạng. Khi đó người quản trị sẽ phải làm gì?",
    "options": [
      "Kích hoạt lại tài khoản người dùng",
      "Xóa đối tượng người dùng và tạo lại",
      "Đổi tên đối tượng người dùng",
      "Đặt lại mật khẩu đối tượng người dùng"
    ],
    "answer": "A. Kích hoạt lại tài khoản người dùng"
  },
  {
    "id": 100,
    "question": "Để đăng nhập một máy con vào một máy DC bạn phải đảm bảo những yêu cầu nào sau đây?",
    "options": [
      "Khi báo primary DNS Suffix",
      "Cả 3 đáp án còn lại đều đúng",
      "Khai báo IP DNS",
      "Thay đổi môi trường workgroup thành Domain"
    ],
    "answer": "B. Cả 3 đáp án còn lại đều đúng"
  },
  {
    "id": 101,
    "question": "Trong mạng Domain có thiết lập các chính sách về GPO, một máy client có tồn tại chính sách cục bộ trên nó. Máy sẽ thực hiện các chính sách thế nào?",
    "options": [
      "Thực hiện chính sách của GPO trước, chính sách cục bộ sau",
      "Chỉ thực hiện các chính sách của GPO",
      "Thực hiện chính sách cục bộ trước, chính sách của GPO sau",
      "Thực hiện song song"
    ],
    "answer": "C. Thực hiện chính sách cục bộ trước, chính sách của GPO sau"
  },
  {
    "id": 102,
    "question": "Share Permission có bao nhiêu lựa chọn?",
    "options": [
      "Read, Modify, Full Control",
      "Read, Modify, Change, Full Control, Write",
      "Read, Change, Full Control",
      "Read, Modify, Change, Full Control"
    ],
    "answer": "C. Read, Change, Full Control"
  },
  {
    "id": 103,
    "question": "Chức năng nào là đúng của Group Policy?",
    "options": [
      "Thi hành một vài chính sách không cần thiết cho Admin",
      "Xóa tài khoản Administrator",
      "Giới hạn những ứng dụng mà người dùng được phép thi hành",
      "Xóa bỏ phần mềm của admin"
    ],
    "answer": "C. Giới hạn những ứng dụng mà người dùng được phép thi hành"
  },
  {
    "id": 104,
    "question": "Ta có folder data áp cho các user chịu các permission của Share Full control và NTFS là Modify thì những user đó chịu quyền gì?",
    "options": [
      "Full control",
      "Write",
      "Change",
      "Modify"
    ],
    "answer": "D. Modify"
  },
  {
    "id": 105,
    "question": "Để áp những chính sách lên trên máy tính thì ta cấu hình ở đâu?",
    "options": [
      "User Configuration.",
      "Computer configuration",
      "Local user and Group",
      "Local policy"
    ],
    "answer": "B. Computer configuration"
  },
  {
    "id": 106,
    "question": "Giúp cho máy ảo có thể ra internet và trao đổi dữ liệu với máy thật ta sử dụng VMnet mấy?",
    "options": [
      "VMnet 2",
      "VMnet 8",
      "VMnet 0",
      "VMnet 1"
    ],
    "answer": "C. VMnet 0"
  },
  {
    "id": 107,
    "question": "Nguyên tắc nào sau đây không đúng khi tạo user trên windows 7?",
    "options": [
      "1 User name có thể dài đến 20 ký tự",
      "User name có phân biệt chữ thường và chữ hoa",
      "Ký tự * không được dùng để đặt tên user name",
      "Password user có phân biệt chữ thường và chữ hoa"
    ],
    "answer": "B. User name có phân biệt chữ thường và chữ hoa"
  },
  {
    "id": 108,
    "question": "Muốn chia sẻ ẩn một thư mục trong ổ đĩa với tên chia sẻ là Dungchung thì trong ô Share name, nhập chuỗi ký tự nào sau?",
    "options": [
      "Dungchung%",
      "Dungchung",
      "Dungchung\\",
      "Dungchung$"
    ],
    "answer": "D. Dungchung$"
  },
  {
    "id": 109,
    "question": "Mạng ứng dụng Domain được xây dựng từ",
    "options": [
      "Mô hình xử lý tập trung và mô hình quản lý tập trung",
      "Mô hình xử lý cộng tác và mô hình quản lý tập trung",
      "Mô hình xử lý phân phối và mô hình quản lý tập trung.",
      "Mô hình xử lý tập trung và mô hình quản lý Workgroup"
    ],
    "answer": "A. Mô hình xử lý tập trung và mô hình quản lý tập trung"
  },
  {
    "id": 110,
    "question": "Bạn là quản trị mạng của Công ty ABC trên Server có 2 phân vùng C và D (C được định dạng là NTFS, D được định dạng FAT32). Trong C có chứa thư mục Data đã được thiết lập một số quyền hạn, do nhu cầu sử dụng nên thư mục Data cần di chuyển sang D. Sau khi di chuyển thư mục thì các quyền hạn trên thư mục này sẽ thay đổi như thế nào",
    "options": [
      "Folder, file trong thư mục Data và thư mục Data đó sẽ mất quyền NTFS",
      "Folder hoặc file trong thư mục Data vẫn giữ nguyên quyền",
      "Folder trong thư mục Data mất quyền, file trong thư mục Data vẫn giữ nguyên quyền",
      "Folder trong thư mục Data giữ nguyên quyền, file trong thư mục Data mất quyền"
    ],
    "answer": "A. Folder, file trong thư mục Data và thư mục Data đó sẽ mất quyền NTFS"
  },
  {
    "id": 111,
    "question": "Trong màn hình Choose a Deployment Configuration, để cấu hình Domain Controller trên một domain trong một forest mới, bạn chọn:",
    "options": [
      "Add a domain controller to an existing domain.",
      "Create a new domain in an existing forest",
      "Create a new domain in a new forest",
      "Existing forest"
    ],
    "answer": "C. Create a new domain in a new forest"
  },
  {
    "id": 112,
    "question": "Sau khi cập nhật mới trình cài đặt và muốn kiểm tra máy in bằng cách in thử một trang. Hộp thoại Properties nào cho phép thực hiện công việc này ?",
    "options": [
      "General",
      "Device Settings",
      "Advanced",
      "Print Management"
    ],
    "answer": "A. General"
  },
  {
    "id": 113,
    "question": "Hỗ trợ chính sách bảo mật cục bộ là định dạng đĩa nào?",
    "options": [
      "Cả 3 đều sai",
      "FAT16",
      "NTFS",
      "FAT32"
    ],
    "answer": "C. NTFS"
  },
  {
    "id": 114,
    "question": "Bạn là người dùng trong mạng. Khi muốn truy nhập các thư mục chia sẻ trên máy chủ có tên SERVER, bạn vào Start / Run và gõ vào dòng lệnh nào sau đây?",
    "options": [
      "\\\\SERVER",
      "\\\\SERVER\\CHIASE",
      "\\\\SERVER$",
      "//SERVER"
    ],
    "answer": "D. //SERVER"
  },
  {
    "id": 115,
    "question": "Trong chế độ mặc định của windows server 2008 thì những nhóm hay user nào được đăng nhập vào server 2008?",
    "options": [
      "Nhóm administrator",
      "user",
      "Nhóm user",
      "guest"
    ],
    "answer": "A. Nhóm administrator"
  },
  {
    "id": 116,
    "question": "Muốn cho những phần mềm nào được phép chạy cho những user thì ta làm sao?",
    "options": [
      "Configuration Computer / System / Don't run specified win application",
      "Configuration User / Control Panel / Don't run specified win application",
      "Configuration User / System / Don't run specified win application",
      "Configuration Computer / Control Panel / Don't run specified win application"
    ],
    "answer": "C. Configuration User / System / Don't run specified win application"
  },
  {
    "id": 117,
    "question": "Hệ điều hành nào được nâng cấp lên Windows server 2008 Datacenter?",
    "options": [
      "Windows server 2003 R2 Enterprise",
      "Windows server 2003 R2 Datacenter",
      "Windows server 2003 Enterprise (SP1)",
      "Windows server 2003 R2 Standard"
    ],
    "answer": "B. Windows server 2003 R2 Datacenter"
  },
  {
    "id": 118,
    "question": "Ta có folder data áp cho các user chịu các permission của share là Read và NTFS là Full control thì những user đó chịu quyền gì ?",
    "options": [
      "Full control",
      "Write",
      "Change",
      "Read"
    ],
    "answer": "D. Read"
  },
  {
    "id": 119,
    "question": "Ta có folder data áp cho các user chịu các permission của share là Full control và NTFS là Read thì những user đó chịu quyền gì ?",
    "options": [
      "Full control",
      "Write",
      "Change",
      "Read"
    ],
    "answer": "D. Read"
  },
  {
    "id": 120,
    "question": "Người dùng có tên là Hải khi truy nhập một thư mục chia sẻ trên máy bạn, cô ấy tạo 1 thư mục con trong đó, khi đó cô ấy nhận được 1 thông báo lỗi là “Access is denied”. Bạn nên cấp quyền gì trong quyền chia sẻ để Hải có thể tạo được thư mục con trong thư mục chia sẻ?",
    "options": [
      "Read",
      "Write",
      "Không cấp được",
      "Change"
    ],
    "answer": "D. Change"
  },
  {
    "id": 121,
    "question": "Trong chính sách mật khẩu của server 2008 DC thì chính sách “Minimum password length” mặc định sẽ có ít nhất bao nhiêu ký tự?",
    "options": [
      "7",
      "6",
      "8",
      "9"
    ],
    "answer": "A. 7"
  },
  {
    "id": 122,
    "question": "DHCP (Dynamic Host Configuration Protocol) server là",
    "options": [
      "Máy chủ được dùng để cấp phát địa chỉ IP động cho các máy trạm trong một hệ thống mạng",
      "Máy chủ được dùng để cấp phát DNS cho các máy trạm trong một hệ thống mạng",
      "Máy chủ được dùng để tạo các máy trạm động trong một hệ thống mạng.",
      "Máy chủ được dùng để cấp phát địa chỉ IP tĩnh cho các máy trạm trong một hệ thống mạng"
    ],
    "answer": "A. Máy chủ được dùng để cấp phát địa chỉ IP động cho các máy trạm trong một hệ thống mạng"
  },
  {
    "id": 123,
    "question": "Một người dùng quên mật khẩu của mình. Anh ta cố gắng đăng nhập hệ thống và nhận được thông báo lỗi nói rằng tài khoản của anh ta bị khóa và đề nghệ anh ta liệ hệ với người quản trị. Bạn là người quản trị, bạn phải là gì?",
    "options": [
      "Enable tài khoản.",
      "Đặt lại mật khẩu cho tài khoản",
      "Mở khóa (Unlock) tài khoản",
      "Đổi tên tài khoản"
    ],
    "answer": "C. Mở khóa (Unlock) tài khoản"
  },
  {
    "id": 124,
    "question": "Trong màn hình Choose a Deploy Configuration, để cấu hình Read Only Domain Controllers (RODC), bạn được:",
    "options": [
      "Add a domain controller to an existing domain",
      "Create a new domain in an existing forest",
      "More about possible deployment configuration",
      "Create a new  domain in a new forest"
    ],
    "answer": "A. Add a domain controller to an existing domain"
  },
  {
    "id": 125,
    "question": "Ta có folder data áp cho các user chịu các permission của Share là Full Control và NTFS là Full Control thì những user đó chịu quyền gì?",
    "options": [
      "Không được truy cập (rỗng)",
      "Write",
      "Read",
      "Full control"
    ],
    "answer": "D. Full control"
  },
  {
    "id": 126,
    "question": "Công cụ nào sau đây cung cấp thông tin về các chương trình và quá trình đang chạy (thực thi) trên máy tính?",
    "options": [
      "Task Manager",
      "Add/Remove Program",
      "Computer Management",
      "Biểu tượng System trong Control Panel"
    ],
    "answer": "A. Task Manager"
  },
  {
    "id": 127,
    "question": "Trong màn hình Choose a Deployment Configuration, để cấu hình Child Domain, bạn chọn?",
    "options": [
      "Create a new domain in a new forest",
      "Create a new domain in a forest",
      "Create a domain in a new forest",
      "Create a new domain in an existing forest."
    ],
    "answer": "D. Create a new domain in an existing forest."
  },
  {
    "id": 128,
    "question": "Có ít nhất bao nhiêu server làm chức năng điều khiển vùng?",
    "options": [
      "2",
      "4",
      "3",
      "1"
    ],
    "answer": "D. 1"
  },
  {
    "id": 129,
    "question": "Windows server 2008 hỗ trợ những loại Dynamic volume nào?",
    "options": [
      "simple, spanned, stiped, mirrored",
      "simple, spanned, stiped, mirrored và Rain-5",
      "simple, spanned",
      "simple, spanned, striped"
    ],
    "answer": "B. simple, spanned, stiped, mirrored và Rain-5"
  },
  {
    "id": 130,
    "question": "Trong chính sách mật khẩu của server 2008 thì chính sách “Minimum password age” mặc nhiên quy định sau bao nhiêu ngày mới được đổi password?",
    "options": [
      "0",
      "2",
      "1",
      "3"
    ],
    "answer": "C. 1"
  },
  {
    "id": 131,
    "question": "Để nâng cao bảo mật trong mạng bạn thực hiện chính sách Maximum Password Age là 7 ngày. Chính sách này sẽ yêu cầu người sử dụng phải đổi mật khẩu hàng tuần. Tuy nhiên sau một thời gian bạn nhận thấy có một vài người sử dụng sau khi đổi sang mật khẩu mới lại đổi ngay về mật khẩu cũ. Bạn sẽ sử dụng chính sách nào dưới đây để tránh tình trạng này?",
    "options": [
      "Password must meet complexity requirements properties",
      "Minimum Password Age",
      "Minimum password length",
      "Enforce password history"
    ],
    "answer": "D. Enforce password history"
  },
  {
    "id": 132,
    "question": "Để cập nhật tất cả thông tin vào Group policy. Bạn thực hiện câu lệnh nào sau đây?",
    "options": [
      "UPDATE /FORCE",
      "GPUPDATE /FORCE",
      "GROUPUPDATE /FORCE",
      "GPDATE /FORCE"
    ],
    "answer": "B. GPUPDATE /FORCE"
  },
  {
    "id": 133,
    "question": "Trong chế độ mặc định thì chính sách mật khẩu của server 2008 là",
    "options": [
      "Phức tạp",
      "Đơn giản",
      "Chữ hoa và chữ thường",
      "Bình thường"
    ],
    "answer": "A. Phức tạp"
  },
  {
    "id": 134,
    "question": "Để đăng nhập một máy con vào một máy DC bạn phải đảm bảo những yêu cầu nào sau đây?",
    "options": [
      "Khai báo primary DNS Suffic",
      "Cả 3 đáp án còn lại đều đúng.",
      "Thay đổi môi trường workgroup thành Domain.",
      "Khai báo IP DNS."
    ],
    "answer": "B. Cả 3 đáp án còn lại đều đúng."
  },
  {
    "id": 135,
    "question": "Sau khi tạo OU có tên Nhanvien trên máy chủ Window 2008 domain controller, bạn muốn tạo nhóm tên Kinhdoanh và nhóm này sẽ thuộc OU Nhanvien. Mở công cụ Active Directory User and Computer và thực hiện như thế nào?",
    "options": [
      "Nhấp chuột phải vào OU Nhanvien chọn New / Group",
      "Nhấp chuột phải vào OU Nhanvien chọn New / User.",
      "Cả 3 đáp án đều sai.",
      "Nhấp chuột phải vào OU Nhanvien chọn New / Organizational Unit."
    ],
    "answer": "A. Nhấp chuột phải vào OU Nhanvien chọn New / Group"
  },
  {
    "id": 136,
    "question": "Dịch vụ nào được sử dụng để truyền các tập tin (file) giữa 2 máy tính sử dụng giao thức TCP?",
    "options": [
      "NNTP",
      "FTP.",
      "HTTP.",
      "SNMP"
    ],
    "answer": "B. FTP."
  },
  {
    "id": 137,
    "question": "Đặc điểm nào mô tả về mô hình mạng Workgroup:",
    "options": [
      "Các máy tính trong mạng có vai trò như nhau.",
      "Cả 3 đáp án còn lại đều sai.",
      "Hoạt động theo cơ chế Client-Server.",
      "Có ít nhất một Server làm trung tâm"
    ],
    "answer": "A. Các máy tính trong mạng có vai trò như nhau."
  },
  {
    "id": 138,
    "question": "Nhóm built in nào có quyền share trong domain controller:",
    "options": [
      "Server Operators.",
      "Power users.",
      "Power Operators.",
      "Users"
    ],
    "answer": "A. Server Operators."
  },
  {
    "id": 139,
    "question": "Trong chính sách mật khẩu, mục Minimum password age dùng để:",
    "options": [
      "Quy định số ký tự tối thiểu của mật khẩu.",
      "Quy định số ngày tối thiểu người dùng được phép đổi mật khẩu.",
      "Thiết lập mật khẩu không cần độ phức tạp",
      "Quy định số ngày tối thiểu người dùng phải đổi mật khẩu"
    ],
    "answer": "B. Quy định số ngày tối thiểu người dùng được phép đổi mật khẩu."
  },
  {
    "id": 140,
    "question": "Sau khi nâng cấp lên DC thì mặc định tạo user yêu cầu password phức tạp. Password nào sau đây là phức tạp?",
    "options": [
      "Passwordpas.",
      "P@ssW0RD.",
      "passw1rd",
      "password"
    ],
    "answer": "B. P@ssW0RD."
  },
  {
    "id": 141,
    "question": "Windows server 2008 hỗ trợ định dạng đĩa nào?",
    "options": [
      "NTFS",
      "Cả 3 đều đúng.",
      "FAT32",
      "FAT16"
    ],
    "answer": "A. NTFS"
  },
  {
    "id": 142,
    "question": "Dịch vụ mạng nào sau đây có thể đảm bảo cho máy tính của bạn nhận được IP, subnet mask, default gateway, DNS?",
    "options": [
      "WINS",
      "DNS",
      "FPT",
      "DHCP"
    ],
    "answer": "D. DHCP"
  },
  {
    "id": 143,
    "question": "Để cấu hình DNS Server chính (phân giải tên thành địa chỉ IP), bạn thực hiện:",
    "options": [
      "Mở cửa sổ DNS Server bằng cách vào Start / Programs / Administrative Tools / chọn DNS / Chọn Zone. Kích chuột phải lên Zone, chọn new Host.",
      "Mở cửa sổ DNS Server bằng cách vào Start / Programs / Administrative Tools / chọn DNS. Kích chuột phải lên mục Reverse Lookup Zones, chọn New Zone.",
      "Mở cửa sổ DNS Server bằng cách vào Start / Programs / Administrative Tools / chọn DNS. Kích chuột phải lên mục Forward Lookup Zones, chọn New Zone.",
      "Mở cửa sổ DNS Server bằng cách vào Start / Programs / Administrative Tools / chọn DNS / Chọn Zone. Kích chuột phải lên Zone, chọn new Alias."
    ],
    "answer": "C. Mở cửa sổ DNS Server bằng cách vào Start / Programs / Administrative Tools / chọn DNS. Kích chuột phải lên mục Forward Lookup Zones, chọn New Zone."
  },
  {
    "id": 144,
    "question": "Đặc điểm nào mô tả về mô hình mạng domain?",
    "options": [
      "Quá trình chứng thực người dùng đăng nhập diễn ra tập trung tại máy Domain Controller.",
      "Các máy tính trong mạng có vai trò như nhau.",
      "Thông tin tài khoản người dùng lưu trong tập tin SAM.",
      "Quá trình chứng thực người dùng đăng nhập diễn ra tại máy cục bộ mà user đăng nhập"
    ],
    "answer": "A. Quá trình chứng thực người dùng đăng nhập diễn ra tập trung tại máy Domain Controller."
  },
  {
    "id": 145,
    "question": "Khi thiết lập chính sách hệ thống ở mục Domain Security Policy thì các chính sách này sẽ có",
    "options": [
      "Phạm vi tác động lên các máy Client trong miền",
      "Phạm vi tác động lên cả Site",
      "Phạm vi tác động trên các máy Domain Controller",
      "Phạm vi tác động lên toàn miền"
    ],
    "answer": "D. Phạm vi tác động lên toàn miền"
  },
  {
    "id": 146,
    "question": "Những nhóm nào không phải là nhóm bảo mật ?",
    "options": [
      "SID",
      "Domain Local",
      "Global",
      "Local"
    ],
    "answer": "A. SID"
  },
  {
    "id": 147,
    "question": "Trong môi trường domain, dịch vụ nào quản lý thông tin người dùng ?",
    "options": [
      "DHCP.",
      "Active Directory",
      "DNS",
      "MAIL"
    ],
    "answer": "B. Active Directory"
  },
  {
    "id": 148,
    "question": "Volume spanned có công dụng gì ?",
    "options": [
      "Giảm kích thước của volume",
      "Tăng kích thước của volume",
      "Giảm lỗi trong quá trình ghi chép",
      "Tăng tốc cho quá trình ghi dữ liệu"
    ],
    "answer": "B. Tăng kích thước của volume"
  },
  {
    "id": 149,
    "question": "Volume đĩa nào giúp tăng hiệu suất hoạt động ?",
    "options": [
      "Volume Raid - 5",
      "Volume Simple",
      "Volume Spanned",
      "Volume mirrored (Raid 1)"
    ],
    "answer": "A. Volume Raid - 5"
  },
  {
    "id": 150,
    "question": "Quyền Full Control trong cấu hình share permission thì ý nào là đúng ?",
    "options": [
      "Cả 3 phương án còn lại đều đúng",
      "Xóa tập tin trong thư mục chia sẻ",
      "Cho phép người dùng thay đổi dữ liệu trên tập tin",
      "Cho phép người dùng xem và thi hành các tập tin trong thư mục chia sẻ"
    ],
    "answer": "A. Cả 3 phương án còn lại đều đúng"
  },
  {
    "id": 151,
    "question": "Khi sử dụng dịch vụ FTP . Kết nối vào FTP Server thì phần lớn FTP Server cho phép kết nối thông qua account nào ?",
    "options": [
      "Netuser",
      "Guest",
      "Anonymous",
      "Administrator"
    ],
    "answer": "C. Anonymous"
  },
  {
    "id": 152,
    "question": "Port (Cổng) mặc định của giao thức HTTP là ?",
    "options": [
      "23",
      "81",
      "8080",
      "80"
    ],
    "answer": "D. 80"
  },
  {
    "id": 153,
    "question": "Trên Windows Server 2008, có thể triển khai tất cả :",
    "options": [
      "12 dịch vụ server",
      "16 dịch vụ server",
      "18 dịch vụ server",
      "14 dịch vụ server"
    ],
    "answer": "B. 16 dịch vụ server"
  },
  {
    "id": 154,
    "question": "Kích thước volume tối đa được hỗ trợ bao nhiêu GB của định dạng đĩa FAT32 ?",
    "options": [
      "1024GB",
      "16GB",
      "32GB",
      "64GB"
    ],
    "answer": "C. 32GB"
  },
  {
    "id": 155,
    "question": "Organizational Unit là gì ?",
    "options": [
      "Đơn vị trung bình trong AD",
      "Đơn vị nhỏ nhất trong AD",
      "Đơn vị nhỏ nhất trong Workgroup",
      "Đơn vị lớn nhất trong AD"
    ],
    "answer": "B. Đơn vị nhỏ nhất trong AD"
  },
  {
    "id": 156,
    "question": "Lệnh nào dùng để kiểm tra các máy trong mạng có thể trao đổi thông tin được với nhau không ?",
    "options": [
      "ping",
      "nslookup",
      "ipconfig \\all",
      "ipconfig"
    ],
    "answer": "A. ping"
  },
  {
    "id": 157,
    "question": "Với File Services, bạn dễ dàng triển khai các chức năng :",
    "options": [
      "Services for Network File Systems : triển khai các dịch vụ cho phép chia sẻ file giữa Windows Server 2008 với các hệ thống *NIX",
      "Distributed File Systems: triển khai hệ thống file phân tán",
      "Cả 3 đáp án còn lại đều đúng",
      "File Services Resource Manager : cấu hình quota, tạo file screen và lập lịch tạo ra storage report"
    ],
    "answer": "C. Cả 3 đáp án còn lại đều đúng"
  },
  {
    "id": 158,
    "question": "Khi một Volume được định dạng NTFS thì permission mặc định của Volume đó là group Everyone sẽ có quyền gì ?",
    "options": [
      "Change",
      "Read",
      "Write",
      "Full Control"
    ],
    "answer": "D. Full Control"
  },
  {
    "id": 159,
    "question": "Khi move một folder hay file trong cùng partition NTFS thì quyền truy cập NTFS như thế nào ?",
    "options": [
      "Folder hay file mất một số quyền gốc của nó",
      "Folder hay file vẫn duy trì các quyền gốc của nó",
      "Các quyền trên folder hay file sẽ mất đi",
      "Cả 3 đáp án còn lại đều sai"
    ],
    "answer": "B. Folder hay file vẫn duy trì các quyền gốc của nó"
  },
  {
    "id": 160,
    "question": "Quyền gì sẽ áp đặt lên thư mục con khi ta áp đặt quyền NTFS lên thư mục cha của nó ?",
    "options": [
      "Giống quyền thư mục cha",
      "Read",
      "Write",
      "Full Control"
    ],
    "answer": "A. Giống quyền thư mục cha"
  },
  {
    "id": 161,
    "question": "Thông tin tài khoản Domain chứa ở đâu ?",
    "options": [
      "SAM.DIT",
      "NTDS.DTT",
      "SAM",
      "NTDS.DIT"
    ],
    "answer": "D. NTDS.DIT"
  },
  {
    "id": 162,
    "question": "Password Policies trong Active Directory Domain Services :",
    "options": [
      "Chính sách được áp đặt lên tất cả người dùng trong miền",
      "Có thể được cấu hình cho nhóm người dùng trong một WORKGROUP",
      "Có thể được cấu hình cho nhóm người dùng trong một OU",
      "Có thể được cấu hình cho nhóm người dùng trong một GROUP"
    ],
    "answer": "A. Chính sách được áp đặt lên tất cả người dùng trong miền"
  },
  {
    "id": 163,
    "question": "Lệnh nào được sử dụng để bắt đầu Microsoft Management Console (MMC) ?",
    "options": [
      "ADMINCONSOLE",
      "MMCONSOLE",
      "MMC",
      "MANAGECON"
    ],
    "answer": "C. MMC"
  },
  {
    "id": 164,
    "question": "Khi máy client join vào Domain thì tài khoản nào được dùng chứng thực quá trình gia nhập đó ?",
    "options": [
      "user@domai.local",
      "teo@domai.local",
      "users",
      "Administator@domain.local"
    ],
    "answer": "D. Administator@domain.local"
  },
  {
    "id": 165,
    "question": "Tên gọi của máy tính cài đặt hệ điều hành Windows Server 2008 trong môi trường WorkGroup là :",
    "options": [
      "Stand-alone Server",
      "B.Domain Controller (DC)",
      "Member Server",
      "Application"
    ],
    "answer": "A. Stand-alone Server"
  },
  {
    "id": 166,
    "question": "Tên gọi của máy tính hệ điều hành Windows Server 2008 trong môi trường domain là ?",
    "options": [
      "Domain Controller (DC)",
      "Member Domain",
      "Stand-alone Server",
      "Member Server"
    ],
    "answer": "A. Domain Controller (DC)"
  },
  {
    "id": 167,
    "question": "Khi tạo tài khoản mới ta có sự lựa chọn cho các chính sách password User must change password at next logon thì sẽ làm gì ?",
    "options": [
      "Lần đăng nhập tiếp theo sẽ phải đổi password",
      "Password không bao giờ hết hạn",
      "Tài khoản bị khóa",
      "Tài khoản đó không được thay đổi password"
    ],
    "answer": "A. Lần đăng nhập tiếp theo sẽ phải đổi password"
  },
  {
    "id": 168,
    "question": "Volume Raid-5 cần ít nhất bao nhiêu đĩa cứng ?",
    "options": [
      "3 đĩa cứng",
      "4 đĩa cứng",
      "5 đĩa cứng",
      "6 đĩa cứng"
    ],
    "answer": "A. 3 đĩa cứng"
  },
  {
    "id": 169,
    "question": "Trên Windows 2008 Stand-alone Server, khi chia sẻ một thư mục thì quyền chia sẻ mặc định cho nhóm Everyone là gì ?",
    "options": [
      "Write",
      "Change",
      "Read",
      "Full Control"
    ],
    "answer": "C. Read"
  },
  {
    "id": 170,
    "question": "Kích thước Volume tối đa được hỗ trợ bao nhiêu GB trên định dạng đĩa FAT16 ?",
    "options": [
      "16GB",
      "64GB",
      "1024GB",
      "4GB"
    ],
    "answer": "D. 4GB"
  },
  {
    "id": 171,
    "question": "Lệnh IPCONFIG /RELEASE dùng để :",
    "options": [
      "Cấp phát địa chỉ IP cho máy",
      "Thay đổi địa chỉ IP của máy",
      "Xóa địa chỉ IP của máy",
      "Cấu hình địa chỉ IP của máy"
    ],
    "answer": "C. Xóa địa chỉ IP của máy"
  },
  {
    "id": 172,
    "question": "Port 80 là của dịch vụ nào ?",
    "options": [
      "Mail",
      "DHCP",
      "Web",
      "DNS"
    ],
    "answer": "C. Web"
  },
  {
    "id": 173,
    "question": "Tiện ích nào giúp bạn quản lý đĩa (partitions, logical drivers, dynamic volumes…)?",
    "options": [
      "Local Disk and Volumes",
      "Disk Administrator",
      "Disk Management",
      "Disk Manager"
    ],
    "answer": "C. Disk Management"
  },
  {
    "id": 174,
    "question": "Phát biểu nào sau đây là đúng :",
    "options": [
      "Active Directory là dịch vụ tập tin (file service), là nơi lưu trữ thông tin về các đối tượng (object) như users, groups, computers, … trong hệ thống mạng.",
      "Active Directory là dịch vụ để lưu trữ các thư mục chia sẻ trên máy chủ",
      "Active Directory là dịch vụ thư mục (directory service), là nơi lưu trữ thông tin về các đối tượng (object) như users, groups, computers, … trong hệ thống mạng.",
      "Active Directory là dịch vụ để lưu trữ các tài nguyên chia sẻ trên máy chủ"
    ],
    "answer": "C. Active Directory là dịch vụ thư mục (directory service), là nơi lưu trữ thông tin về các đối tượng (object) như users, groups, computers, … trong hệ thống mạng."
  },
  {
    "id": 175,
    "question": "Trên máy tính PC1 bạn chia sẻ thư mục Data với nhóm Everyone có quyền là Full Control. Trên PC2 khi truy cập vào thư mục Data chia sẻ từ PC1 thì xuất hiện thông báo Access Denied. Để truy cập vào Data phải thực hiện ?",
    "options": [
      "Add nhóm Domain User",
      "Phân quyền NTFS permission cho nhóm Everyone",
      "Remove nhóm Everyone",
      "Bổ sung nhóm Administrator - Full Control"
    ],
    "answer": "B. Phân quyền NTFS permission cho nhóm Everyone"
  },
  {
    "id": 176,
    "question": "Theo chính sách của công ty bạn, tất cả các công việc của người quản trị liên quan đến các tài khoản như tạo ra, xóa, đổi  tên tài khoản, cũng như tạo ra, xóa , đổi tên các nhóm và thay đổi mật khẩu, vô hiệu hóa (disable) tài khoản đều phải được kiểm soát. Các sự kiện này sẽ lưu trữ trong nhật ký bảo mật (Security Log). Theo chính sách này bạn thay đổi GPO mặc định của Domain. Hãy cho biết bạn phải thực hiện kiểm soát sự kiện (event) nào dưới đây ?",
    "options": [
      "Audit Successful Account Logon Events",
      "Audit Successful Account Management",
      "Audit Successful Privilege Use",
      "Audit Failed Account Logon Events"
    ],
    "answer": "B. Audit Successful Account Management"
  },
  {
    "id": 177,
    "question": "Những bước nào sau đây có thể tạo ra  Organization Unit (OU) ?",
    "options": [
      "Start / Programs / Administrative Tools / Active Directory Domain And Trust / Click tên miền chọn biểu tượng tạo OU.",
      "Start / Programs / Administrative Tools / Domain Controller Security Policy / Click tên miền chọn biểu tượng tạo OU.",
      "Start / Programs / Administrative Tools / Active Directory Users and Computer  / Click tên miền chọn biểu tượng tạo OU.",
      "Start / Programs / Administrative Tools / Domain Policy / Click tên miền chọn biểu tượng tạo OU."
    ],
    "answer": "C. Start / Programs / Administrative Tools / Active Directory Users and Computer  / Click tên miền chọn biểu tượng tạo OU."
  },
  {
    "id": 178,
    "question": "Lệnh NSLookup dùng để :",
    "options": [
      "Kiểm tra quá trình cấp phát địa chỉ IP động cho các máy",
      "Kiểm tra địa chỉ IP của máy",
      "Kiểm tra quá trình kết nối giữa các máy có thông nhau không",
      "Kiểm tra quá trình phân giải tên máy thành địa chỉ IP tương ứng"
    ],
    "answer": "D. Kiểm tra quá trình phân giải tên máy thành địa chỉ IP tương ứng"
  },
  {
    "id": 179,
    "question": "Khi tạo tài khoản mới ta có sự lựa chọn cho các chính sách password User Cannot change password thì sẽ làm gì ?",
    "options": [
      "Lần đăng nhập tiếp theo sẽ phải đổi Password",
      "Tài khoản bị khóa",
      "Password không bao giờ hết hạn",
      "Tài khoản đó không được thay đổi password"
    ],
    "answer": "D. Tài khoản đó không được thay đổi password"
  },
  {
    "id": 180,
    "question": "Kích thước Volume tối đa được hỗ trợ bao nhiêu GB của định dạng đĩa NTFS ?",
    "options": [
      "64GB",
      "16GB",
      "32GB",
      "1024GB"
    ],
    "answer": "D. 1024GB"
  },
  {
    "id": 181,
    "question": "Trên miền tdmu.edu.vn có địa chỉ 192.168.12.6 chia sẻ máy in với tên HP1200 thông qua mạng nội bộ của cơ quan. Hùng muốn sử dụng máy in chia sẻ trên mạng, Hùng phải cấu hình máy in của mình như thế nào ?",
    "options": [
      "http://192.168.12.6/printers/HP1200",
      "http://192.168.12.6/HP1200",
      "http://tdmu.edu.vn/printer/HP1200",
      "http://tdmu.edu.vn/printers/HP1200"
    ],
    "answer": "B. http://192.168.12.6/HP1200"
  },
  {
    "id": 182,
    "question": "Khi tạo tài khoản mới ta có sự lựa chọn cho các chính sách Password Account is disible thì sẽ làm gì ?",
    "options": [
      "Lần đăng nhập tiếp theo sẽ phải đổi Password",
      "Tài khoản bị khóa",
      "Password không bao giờ hết hạn",
      "Tài khoản đó không được thay đổi Password"
    ],
    "answer": "B. Tài khoản bị khóa"
  },
  {
    "id": 183,
    "question": "Trong trường hợp nếu như ta có dữ liệu là 5GB nhưng ta có 3 ổ đĩa dung lượng trống là ổ 1 là 3GB, ổ 2 là 1GB, ổ 3 là 2GB thì ta dùng loại cấu hình đĩa nào ?",
    "options": [
      "Volume Simple",
      "Volume Mirrored (Raid 1)",
      "Volume Spanned",
      "Volume Striped (Raid 0)"
    ],
    "answer": "C. Volume Spanned"
  },
  {
    "id": 184,
    "question": "Password nào là password phức tạp ?",
    "options": [
      "#@&amp;**&amp;hsasaslajlk1",
      "Aa123456@",
      "A12345678900987654321",
      "FHUDJJSJIfajfasfdskafsda"
    ],
    "answer": "B. Aa123456@"
  },
  {
    "id": 185,
    "question": "Khi thiết lập các chính sách hệ thống ở mục Domain Controller Security Policy thì các chính sách này sẽ có :",
    "options": [
      "Phạm vi tác động lên các máy Client trong miền",
      "Phạm vi tác động lên các máy Domain Controller",
      "Phạm vi tác động lên cả Site.",
      "Phạm vi tác động lên toàn miền."
    ],
    "answer": "B. Phạm vi tác động lên các máy Domain Controller"
  },
  {
    "id": 186,
    "question": "Nhóm Everyone thuộc vào loại nhóm nào sau đây ?",
    "options": [
      "Nhóm Đồng nhất đặc biệt (Special Identity Group)",
      "Nhóm Cục bộ (Local Group)",
      "Nhóm Hệ thống dựng sẵn (Built-In System Group)",
      "Nhóm Cục bộ dựng sẵn (Built-In Local Group)"
    ],
    "answer": "C. Nhóm Hệ thống dựng sẵn (Built-In System Group)"
  },
  {
    "id": 187,
    "question": "Trong môi trường Domain, dịch vụ nào quản lý thông tin người dùng ?",
    "options": [
      "DHCP",
      "Active Directory",
      "MAIL",
      "DNS"
    ],
    "answer": "B. Active Directory"
  },
  {
    "id": 188,
    "question": "Trong môi trường Workgroup, thông tin tài khoản được lưu trong tập tin nào ?",
    "options": [
      "SAM",
      "DOC",
      "URL",
      "SAN"
    ],
    "answer": "A. SAM"
  },
  {
    "id": 189,
    "question": "Những chức năng nào không phải là của Raid 0 ?",
    "options": [
      "Dữ liệu được lưu trữ tuần tự",
      "Hiệu suất hoạt động",
      "Ít nhất phải 3 đĩa Dynamic",
      "Tăng dung lượng"
    ],
    "answer": "C. Ít nhất phải 3 đĩa Dynamic"
  },
  {
    "id": 190,
    "question": "Trong quá trình cài đặt máy tính, Printer Port mà ta chọn là port nào ?",
    "options": [
      "LPT1",
      "PLT1",
      "PPT1",
      "LLt1"
    ],
    "answer": "A. LPT1"
  },
  {
    "id": 191,
    "question": "Trên miền (domain), bạn cấu hình Password Policy và đặt thông số Minimum Password Age là 1 ngày . Bạn hãy cho biết phát biểu nào dưới đây là đúng với một người sử dụng thông thường trong miền (domain) này?",
    "options": [
      "Người sử dụng này phải đợi 1 ngày sau mới đổi được mật khẩu",
      "Mật khẩu của người sử dụng này có thể được thay đổi ngay tức khắc bởi một người sử dụng khác",
      "Sau 1 ngày người sử dụng này sẽ nhận được thông báo “Mật khẩu của bạn hết hạn”",
      "Người sử dụng này có thể thay đổi mật khẩu ngay tức khắc"
    ],
    "answer": "A. Người sử dụng này phải đợi 1 ngày sau mới đổi được mật khẩu"
  },
  {
    "id": 192,
    "question": "Trên máy  tính PC01 có một thư mục TEMP nằm trên ổ đĩa C được chia sẻ ẨN. Bạn sẽ dùng đường dẫn nào sau đây để truy cập vào được thư mục này từ một máy khác trong mạng ?",
    "options": [
      "C:\\TEMP$",
      "\\\\ PC01\\TEMP$",
      "\\\\ PC01\\TEMP@",
      "\\\\ PC01\\TEMP#"
    ],
    "answer": "B. \\\\ PC01\\TEMP$"
  },
  {
    "id": 193,
    "question": "Trong quá trình cấu hình DNS Server chính, trong màn hình Zone Type, bạn chọn :",
    "options": [
      "Primary zone",
      "Secondary zone",
      "Main zone",
      "Stub zone"
    ],
    "answer": "A. Primary zone"
  },
  {
    "id": 194,
    "question": "Username nào là không đúng ?",
    "options": [
      "bao=bao",
      "123456",
      "anh",
      "Flash_a"
    ],
    "answer": "A. bao=bao"
  },
  {
    "id": 195,
    "question": "Tiện ích nào được dùng để tạo user accounts được lưu trữ trên Windows Server 2008 Domain controllers ?",
    "options": [
      "Active Directory Users and Groups",
      "Domain Users and Groups",
      "Active Directory Users and Computers",
      "Domain Users and Computers"
    ],
    "answer": "C. Active Directory Users and Computers"
  },
  {
    "id": 196,
    "question": "Phát biểu nào sau đây đúng cho Read-Only Domain Controller (RODC):",
    "options": [
      "RODC là một Domain Controller với cơ sở dữ liệu Active Directory trong đó có chứa thông tin về mật khẩu của các user",
      "RODC không cho phép thực hiện bất kỳ sự thay đổi nào ngoại trừ tài khoản máy tính và tài khoản người dùng",
      "RODC là một Domain Controller với cơ sở dữ liệu Active Directory cho phép các user có thể lưu thông tin lên nó",
      "RODC là một Domain Controller với cơ sở dữ liệu Active Directory ở dạng read-only"
    ],
    "answer": "D. RODC là một Domain Controller với cơ sở dữ liệu Active Directory ở dạng read-only"
  },
  {
    "id": 197,
    "question": "Quyền Full Control trong cấu hình share permission thì ý nào là đúng ?",
    "options": [
      "Cho phép người dùng thay đổi dữ liệu trên tập tin",
      "Xóa tập tin trong thư mục chia sẻ",
      "Cho phép người dùng xem và thi hành các tập tin trong thư mục chia sẻ",
      "Toàn quyền trên thư mục chia sẻ"
    ],
    "answer": "D. Toàn quyền trên thư mục chia sẻ"
  },
  {
    "id": 198,
    "question": "Lệnh DCPROMO dùng để làm gì ?",
    "options": [
      "Nâng cấp Windows 7 Professional thành Domain controller",
      "Liệt kê danh sách các Domain controller",
      "Nâng cấp Windows Server 2008 thành Domain controller",
      "Nâng cấp Windows 2003 thành Server thành Windows Server 2008"
    ],
    "answer": "C. Nâng cấp Windows Server 2008 thành Domain controller"
  },
  {
    "id": 199,
    "question": "Trên máy tính sử dụng Windows 2008 Enterprise ở trong mô hình WorkGroup, ai có quyền chia sẻ thư mục trên máy tính này ?",
    "options": [
      "Thành viên của nhóm Enterprise Admins và Remote Desktop Users",
      "Thành viên của nhóm Administrators và Power Users",
      "Thành viên của nhóm Administrators và Domain Guests",
      "Thành viên của nhóm Administrators và Domain Users"
    ],
    "answer": "B. Thành viên của nhóm Administrators và Power Users"
  },
  {
    "id": 200,
    "question": "Trong môi trường Domain, thông tin tài khoản được lưu trong tập tin nào ?",
    "options": [
      "AD",
      "log",
      "NTDS.DIT",
      "syslog.msc"
    ],
    "answer": "C. NTDS.DIT"
  },
  {
    "id": 201,
    "question": "Trong các giao thức sau, giao thức nào được sử dụng trong dịch vụ mail?",
    "options": [
      "TCP/IP và FTP",
      "POP3 và SMTP",
      "NetBEUI và TCP/IP",
      "FTP và HTTP"
    ],
    "answer": "B. POP3 và SMTP"
  },
  {
    "id": 202,
    "question": "Triển khai chính sách nhóm trên miền, chính sách Software Setting các cấu hình trên chúng liên quan đến vấn đề gì ?",
    "options": [
      "Các cấu hình liên quan đến các phần mềm được cài đặt",
      "Các chính sách hệ thống",
      "Các thiết lập cho các thành phần của Windows",
      "Các thiết lập liên quan tròng quá trình sử dụng Windows"
    ],
    "answer": "A. Các cấu hình liên quan đến các phần mềm được cài đặt"
  },
  {
    "id": 203,
    "question": "Volume Spanner dùng tối đa bao nhiêu ổ đĩa vật lý ?",
    "options": [
      "64 ổ đĩa vật lý",
      "50 ổ đĩa vật lý",
      "32 ở đĩa vật lý",
      "12 ổ đĩa vật lý"
    ],
    "answer": "C. 32 ở đĩa vật lý"
  },
  {
    "id": 204,
    "question": "Lan đang lựa chọn địa chỉ IP để gán cho máy chủ sử dụng Microsoft Windows Server 2008 (Web Edition). Máy xách tay của cô ta sử dụng địa chỉ IP 10.52.1.37 với mặt nạ mạng 255.255.255.0, máy tính này đang được kết nối vào cùng một switch với máy chủ. Địa chỉ IP và mặt nạ mạng nào dưới đây cô ta có thể sử dụng để gán cho máy chủ để máy xách tay của cô ta có thể kết nối vào máy chủ mà chỉ sử dụng Switch và giao thức TCP/IP ?",
    "options": [
      "10.52.1.130 255.255.255.192",
      "10.1.52.31 255.255.255.0",
      "10.52.1.37 255.255.255.0",
      "10.52.1.130 255.255.255.0"
    ],
    "answer": "D. 10.52.1.130 255.255.255.0"
  },
  {
    "id": 205,
    "question": "Quyền mặc định của nhóm Printer Operation là gì ?",
    "options": [
      "Quản lý tài liệu in",
      "Được phép in",
      "Quản lý máy in",
      "Cả 3 đáp án còn lại đều đúng"
    ],
    "answer": "D. Cả 3 đáp án còn lại đều đúng"
  },
  {
    "id": 206,
    "question": "Volume Simple là dùng trên mấy ổ đĩa để phân chia ?",
    "options": [
      "4 ổ đĩa",
      "2 ổ đĩa",
      "Một ổ đĩa duy nhất",
      "3 ổ đĩa"
    ],
    "answer": "C. Một ổ đĩa duy nhất"
  },
  {
    "id": 207,
    "question": "Thiết lập hạn ngạch chỉ được áp dụng trên ?",
    "options": [
      "FAT",
      "FAT32",
      "NTFS",
      "FAT36"
    ],
    "answer": "C. NTFS"
  },
  {
    "id": 208,
    "question": "Những công cụ nào dưới đây cho phép bạn tạo ra các tài khoản người dùng, máy tính và nhóm dựa trên dữ liệu bạn nhập vào hoặc từ một file ?",
    "options": [
      "DSQUERY",
      "Active Directory Users and Computers",
      "Active Directory Users and Trusts",
      "DSMOD"
    ],
    "answer": "B. Active Directory Users and Computers"
  },
  {
    "id": 209,
    "question": "Thông tin người dùng được quản lý ở đâu trên Domain ?",
    "options": [
      "Active Directory",
      "NTFS",
      "Mail",
      "Web"
    ],
    "answer": "A. Active Directory"
  },
  {
    "id": 210,
    "question": "Quyền mặc định của nhóm Everyone là gì ?",
    "options": [
      "Được phép in",
      "Quản lý máy in",
      "Cả 3 phương án đều đúng",
      "Quản lý tài liệu in"
    ],
    "answer": "A. Được phép in"
  },
  {
    "id": 211,
    "question": "Nội dung nào sau đây không mô tả đúng về hệ thống file NTFS ?",
    "options": [
      "Hỗ trợ hạn ngạch đĩa",
      "Hỗ trợ mã hóa tập tin",
      "Hỗ trợ nén đĩa",
      "Hỗ trợ truy cập từ Windows 98"
    ],
    "answer": "D. Hỗ trợ truy cập từ Windows 98"
  },
  {
    "id": 212,
    "question": "Về cách thức hoạt động, DNS Server lưu trữ một cơ sở dữ liệu bao gồm các bản ghi DNS và dịch vụ lắng nghe các yêu cầu. Khi máy trạm gửi yêu cầu phân giải đến, DNS tiến hành:",
    "options": [
      "Tra cứu trong cơ sở dữ liệu và gửi kết quả tương ứng về cho máy trạm",
      "Nhờ hệ thống DNS phân giải hộ xong lấy kết quả trả về cho máy trạm",
      "Tự mình phân giải tên thành địa chỉ IP và gửi kết quả tương ứng về máy trạm",
      "Tra cứu trong cơ sở dữ liệu cục bộ và nếu có sẽ gửi kết quả tương ứng về cho máy trạm, nếu không sẽ nhờ hệ thống DNS phân giải hộ xong lấy kết quả trả về cho máy trạm"
    ],
    "answer": "D. Tra cứu trong cơ sở dữ liệu cục bộ và nếu có sẽ gửi kết quả tương ứng về cho máy trạm, nếu không sẽ nhờ hệ thống DNS phân giải hộ xong lấy kết quả trả về cho máy trạm"
  },
  {
    "id": 213,
    "question": "Với các file đã tồn tại trong ổ đĩa hoặc thư mục trước khi file screen được tạo ra :",
    "options": [
      "Người sử dụng được quyền truy cập vào các file đó nếu sử dụng thêm chức năng Allow Access File",
      "Người sử dụng hoàn toàn có thể truy cập được cho dù các file đó thuộc vào danh sách các loại file bị cấm",
      "Các file thuộc danh sách bị cấm sẽ tự động xóa bỏ",
      "Người sử dụng không thể truy cập được vì các file đó thuộc vào danh sách các loại file bị cấm"
    ],
    "answer": "B. Người sử dụng hoàn toàn có thể truy cập được cho dù các file đó thuộc vào danh sách các loại file bị cấm"
  },
  {
    "id": 214,
    "question": "Trong server 2008 mặc định nhóm tài khoản nào không được đăng nhập trong server 2008 ?",
    "options": [
      "Nhóm Backup Operators",
      "Nhóm Server Operators",
      "Nhóm users",
      "Nhóm administrators"
    ],
    "answer": "C. Nhóm users"
  },
  {
    "id": 215,
    "question": "Khi tiến hành cài đặt dịch vụ Active Directory, nếu muốn tạo mới Domain Controller để quản lý 1 domain thì chọn mục nào ?",
    "options": [
      "Domain in a new forest",
      "Cả 3 đáp án còn lại đều đúng",
      "Domain tree in an existing forest",
      "Child domain in an existing domain tree"
    ],
    "answer": "A. Domain in a new forest"
  },
  {
    "id": 216,
    "question": "Trong môi trường MS Windows các quyền có thể thiết lập cho User truy xuất thông qua mạng là ?",
    "options": [
      "Read, Change, Full Control",
      "Read, Change",
      "Change, Full Control",
      "Read, Full Control"
    ],
    "answer": "A. Read, Change, Full Control"
  },
  {
    "id": 217,
    "question": "Trên máy tính cục bộ (local), khi tạo mới tài khoản người dùng thì mặc định người dùng này thuộc nhóm nào ?",
    "options": [
      "Users",
      "Administrators",
      "Guests",
      "Performance Log Users"
    ],
    "answer": "A. Users"
  },
  {
    "id": 218,
    "question": "Những quyền nào sau đây không phải là quyền share ?",
    "options": [
      "Change",
      "Full Control",
      "Write",
      "Read"
    ],
    "answer": "C. Write"
  },
  {
    "id": 219,
    "question": "Những bước nào sau đây có thể tạo ra User ?",
    "options": [
      "Start / program / admin tool / Domain Security policy / Click Tên máy chọn biểu tượng tạo User",
      "Start / program / admin tool / Active Directory users and Computers / Click Tên máy chọn biểu tượng tạo User",
      "Start / program / admin tool / Domain  Controller Security policy / Click Tên máy chọn biểu tượng tạo User",
      "Start / program / admin tool / Active Directory Domain and Trust  / Click Tên máy chọn biểu tượng tạo User"
    ],
    "answer": "B. Start / program / admin tool / Active Directory users and Computers / Click Tên máy chọn biểu tượng tạo User"
  },
  {
    "id": 220,
    "question": "Tính năng nào là tính năng của Volume (Raid 1) ?",
    "options": [
      "Hiệu suất hoạt động",
      "Tăng dung lượng",
      "An toàn cho dữ liệu",
      "Dữ liệu được lưu trữ tuần tự"
    ],
    "answer": "C. An toàn cho dữ liệu"
  },
  {
    "id": 221,
    "question": "Trong Object chứa những thuộc tính cơ bản nào ?",
    "options": [
      "User, Computer, Printer",
      "Computer, User",
      "User, Printer",
      "Cả 3 đáp án còn lại đều sai"
    ],
    "answer": "A. User, Computer, Printer"
  },
  {
    "id": 222,
    "question": "Thay vì nhớ địa chỉ IP mà ta chỉ cần biết tên miền thì ở đây chúng ta sử dụng dịch vụ mạng nào ?",
    "options": [
      "FTP",
      "DHCP",
      "DNS",
      "MAIL"
    ],
    "answer": "C. DNS"
  },
  {
    "id": 223,
    "question": "Khi tạo tài khoản mới ta có sự lựa chọn cho các chính sách Password never express thì sẽ làm gì ?",
    "options": [
      "Tài khoản đó không được thay đổi password",
      "Lần đăng nhập tiếp theo sẽ phải đổi Password",
      "Tài khoản bị khóa",
      "Password không bao giờ hết hạn"
    ],
    "answer": "D. Password không bao giờ hết hạn"
  },
  {
    "id": 224,
    "question": "Trong windows 7 khi chia sẻ thư mục mặc định hệ điều hành cho phép bao nhiêu người dùng truy nhập đồng thời vào thư mục chia sẻ đó ?",
    "options": [
      "20",
      "Không giới thiệu",
      "30",
      "10"
    ],
    "answer": "B. Không giới thiệu"
  }
]