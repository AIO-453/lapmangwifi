using lapmangfptBinhThuan.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace lapmangfptBinhThuan.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult khuyenmaihot()
        {
            return View();
        }

        public IActionResult internet_fpt()
        {
            return View();
        }

        public IActionResult truyen_hinh_fpt()
        {
            return View();
        }
        public IActionResult fpt_camera()
        {
            return View();
        }
        public IActionResult fpt_playbox()
        {
            return View();
        }
        public IActionResult tin_tuc()
        {
            return View();
        }
        public IActionResult lien_he()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
