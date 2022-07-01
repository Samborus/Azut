using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Arrays.Controllers
{
    public class Arrays : Controller
    {
        // GET: Arrays
        public ActionResult Index()
        {
            return View();
        }

        // GET: Arrays/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Arrays/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Arrays/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: Arrays/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Arrays/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: Arrays/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Arrays/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
