using System.ComponentModel.DataAnnotations;

namespace lapmangfptBinhThuan.Models
{
    public class lienhe
    {
        [Display(Name = "Họ và tên")]
        [Required(ErrorMessage = "*")]
        [MaxLength(20, ErrorMessage = "Tối đa 20 ký tự")]
        public string HoTen { get; set; }

        [Display(Name = "Số điện thoại")]
        [Required(ErrorMessage = "*")]
        [MaxLength(16, ErrorMessage = "Tối đa 26 ký tự")]
        public string DienThoai { get; set; }

        [Display(Name = "Địa chỉ nhà")]
        [Required(ErrorMessage = "*")]
        [MaxLength(100, ErrorMessage = "Tối đa 100 ký tự")]
        public string DiaChi { get; set; }

        [Display(Name = "Nội dung tin nhắn")]
        [MaxLength(200, ErrorMessage = "Tối đa 100 ký tự")]
        public string? NoiDung { get; set; }
    }
}
