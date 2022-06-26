using backend.Models;
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
    [Authorize]
    public class USUARIOController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/USUARIO
        public IQueryable<USUARIO_rU> GetUSUARIO()
        {
            var users = db.USUARIO.ToList();
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

        // GET: api/USUARIO?limit=5&page=1&search=test&sortby=col:ASC
        public IQueryable<USUARIO_rU> GetUSUARIO(int limit, int page, string search, string SortBy)
        {
            var sorted = "id_Usuario ascending";
            if (SortBy != null)
            {
                string[] sortby = SortBy.Split(':');
                sorted = sortby[0] + " " + (sortby[1].Equals("ASC") ? "ascending" : "descending");
            }
            var users = db.USUARIO
                .Where(x =>
                    DbFunctions.Like(x.nombre, "%" + search + "%") ||
                    DbFunctions.Like(x.email, "%" + search + "%") ||
                    DbFunctions.Like(x.telefono, "%" + search + "%") ||
                    DbFunctions.Like(x.ocupacion, "%" + search + "%") ||
                    DbFunctions.Like(x.direccion, "%" + search + "%") ||
                    DbFunctions.Like(x.institucion, "%" + search + "%") ||
                    DbFunctions.Like(x.ROLUSUARIO.rol, "%" + search + "%"))
                .OrderBy(sorted).Skip((page - 1) * limit).Take(limit).ToList();
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

        // GET: api/USUARIO/5
        [ResponseType(typeof(USUARIO_rU))]
        public async Task<IHttpActionResult> GetUSUARIO(string id)
        {
            var user = await db.USUARIO.FindAsync(id);
            USUARIO_rU uSUARIO = new USUARIO_rU();

            if (user == null)
            {
                return NotFound();
            }
            else
            {
                uSUARIO.id_Usuario = id;
                uSUARIO.nombre = user.nombre;
                uSUARIO.email = user.email;
                uSUARIO.telefono = user.telefono;
                uSUARIO.ocupacion = user.ocupacion;
                uSUARIO.direccion = user.direccion;
                uSUARIO.fotografia = Encoding.UTF8.GetString(user.fotografia);
                uSUARIO.institucion = user.institucion;
                uSUARIO.ROLUSUARIO = user.ROLUSUARIO;
            }

            return Ok(uSUARIO);
        }

        // PUT: api/USUARIO/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutUSUARIO(string id, USUARIO uSUARIO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != uSUARIO.id_Usuario)
            {
                return BadRequest();
            }

            db.Entry(uSUARIO).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!USUARIOExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/USUARIO
        [ResponseType(typeof(USUARIO))]
        public async Task<IHttpActionResult> PostUSUARIO(USUARIO uSUARIO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.USUARIO.Add(uSUARIO);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (USUARIOExists(uSUARIO.id_Usuario))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = uSUARIO.id_Usuario }, uSUARIO);
        }

        // DELETE: api/USUARIO/5
        [ResponseType(typeof(USUARIO))]
        public async Task<IHttpActionResult> DeleteUSUARIO(string id)
        {
            USUARIO uSUARIO = await db.USUARIO.FindAsync(id);
            if (uSUARIO == null)
            {
                return NotFound();
            }

            db.USUARIO.Remove(uSUARIO);
            await db.SaveChangesAsync();

            return Ok(uSUARIO);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool USUARIOExists(string id)
        {
            return db.USUARIO.Count(e => e.id_Usuario == id) > 0;
        }
    }
}