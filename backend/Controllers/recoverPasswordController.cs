using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;

namespace backend.Controllers
{
    public class recoverPasswordController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/recoverPassword?idUsuario=00000001&token=djkasndkjsandkjsadnq98
        [HttpGet]
        [Route("api/recoverPassword")]
        [ResponseType(typeof(TOKEN))]
        public async Task<IHttpActionResult> GetToken(string idUsuario, string token)
        {                                    
            TOKEN tokendb = db.TOKEN.Where(x => x.id_Usuario == idUsuario).FirstOrDefault();

            TOKENController tOKENController = new TOKENController();

            if (tokendb != null)
            {
                string dbtoken = Encoding.UTF8.GetString(tokendb.TOKEN1);
                if (token != dbtoken) {
                    return BadRequest();
                }
                if(tokendb.fh_Expiracion <= DateTime.Now)
                {
                    return BadRequest();
                }
                else
                {
                    TOKEN tOKEN = new TOKEN();
                    tOKEN.TOKEN1 = tokendb.TOKEN1;
                    tOKEN.id_Usuario = tokendb.id_Usuario;
                    tOKEN.fh_Expiracion = DateTime.Now;
                    tOKEN.id_Token = tokendb.id_Token;

                    await tOKENController.PutTOKEN(tokendb.id_Token, tOKEN);
                    return Ok(tOKEN);
                }
            }
            return NotFound();
        }        
    }
}
