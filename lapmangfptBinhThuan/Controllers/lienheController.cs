using lapmangfptBinhThuan.Data;
using lapmangfptBinhThuan.Models;
using Microsoft.AspNetCore.Mvc;

namespace lapmangfptBinhThuan.Controllers
{
    public class lienheController : Controller
    {
        private readonly LapdatmangfptContext db;

        public lienheController(LapdatmangfptContext context)
        {
            db = context;
        }
        [HttpGet]
        public IActionResult lien_he()
        {
            return View();
        }

        [HttpPost]
        public IActionResult lien_he(lienhe model)
        {
            if (ModelState.IsValid) 
            {
                var Hoten = model;
                // Bạn có thể sử dụng biến Hoten để thực hiện các thao tác khác, ví dụ lưu vào cơ sở dữ liệu
                // Ví dụ:
                // _context.Users.Add(Hoten);
                // _context.SaveChanges();

                // Giả sử bạn muốn chuyển hướng người dùng tới trang khác sau khi lưu thành công
                return RedirectToAction("Success");
            }
            return View();
        }
    }
}

