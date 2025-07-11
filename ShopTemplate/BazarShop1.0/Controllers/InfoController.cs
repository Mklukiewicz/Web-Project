using Microsoft.AspNetCore.Mvc;

namespace BazarShop1._0.Controllers
{
    public class InfoController : Controller
    {
        public IActionResult Policy() => View();
        public IActionResult Returns() => View();
        public IActionResult Rights() => View();
    }
}
