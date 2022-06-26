using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;

namespace backend.Controllers
{
    public class UploadImageController : ApiController
    {
        [HttpPost]
        [Route("api/UploadImage")]
        [ResponseType(typeof(void))]
        public IHttpActionResult UploadImage()
        {
            string imageName = null;
            var httpRequest = HttpContext.Current.Request;

            var postedFile = httpRequest.Files["file"];
            imageName = new string(Path.GetFileName(postedFile.FileName).ToArray());
            var filePath = HttpContext.Current.Server.MapPath("~/wwwroot/images/" + imageName);
            postedFile.SaveAs(filePath);

            return Ok();
        }
    }
}
