using backend.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;

namespace backend.Controllers
{
    public class ADMINISTRADORESController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/USUARIO/2
        public IQueryable<USUARIO_rU> GetUSUARIO()
        {
            var users = db.USUARIO.Where(x => x.id_rolUsuario == 2 || x.id_rolUsuario == 3).ToList();
            List<USUARIO_rU> usersList = new List<USUARIO_rU>();
            foreach (var user in users)
            {
                USUARIO_rU uSUARIO = new USUARIO_rU();
                uSUARIO.id_Usuario = user.id_Usuario;
                uSUARIO.nombre = user.nombre;
                uSUARIO.email = user.email;
                uSUARIO.telefono = user.telefono;
                uSUARIO.ocupacion = user.ocupacion;
                uSUARIO.direccion = user.direccion;
                uSUARIO.fotografia = Encoding.UTF8.GetString(user.fotografia);
                uSUARIO.institucion = user.institucion;
                uSUARIO.ROLUSUARIO = user.ROLUSUARIO;
                usersList.Add(uSUARIO);
            }

            return usersList.AsQueryable();
        }
    }
}