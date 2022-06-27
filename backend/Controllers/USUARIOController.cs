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
    [Authorize]
    public class USUARIOController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/USUARIO/2
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

        [ResponseType(typeof(USUARIO_PAGINADOR))]
        // GET: api/USUARIO?id_rolUsuario=2&limit=5&page=1&search=test&sortby=col:ASC
        public async Task<IHttpActionResult> GetUSUARIO(int limit, int page, string search, string SortBy, int id_rolUsuario, string id_Usuario)
        {
            var sorted = "id_Usuario ascending";
            if (SortBy != null)
            {
                string[] sortby = SortBy.Split(':');
                sorted = sortby[0] + " " + (sortby[1].Equals("ASC") ? "ascending" : "descending");
            }

            USUARIO_PAGINADOR PAGINADOR = new USUARIO_PAGINADOR();
            PAGINADOR.meta = new Meta();
            PAGINADOR.data = new List<USUARIO_rU>();
            List<USUARIO> users;
            
            if (id_rolUsuario == 2)
            {
                int total = db.USUARIO
                .Where(x =>
                    x.id_rolUsuario == 1 && (
                    DbFunctions.Like(x.nombre, "%" + search + "%") ||
                    DbFunctions.Like(x.email, "%" + search + "%") ||
                    DbFunctions.Like(x.telefono, "%" + search + "%") ||
                    DbFunctions.Like(x.ocupacion, "%" + search + "%") ||
                    DbFunctions.Like(x.direccion, "%" + search + "%") ||
                    DbFunctions.Like(x.institucion, "%" + search + "%") ||
                    DbFunctions.Like(x.ROLUSUARIO.rol, "%" + search + "%")))
                .OrderBy(sorted).Count();

                
                PAGINADOR.meta.totalItems = total;
                PAGINADOR.meta.itemsPerPage = limit;
                Double totalPages = (total + limit - 1) / limit;
                PAGINADOR.meta.totalPages = (int)Math.Round(totalPages);
                PAGINADOR.meta.currentPage = page > PAGINADOR.meta.totalPages ? 1 : page;

                users = db.USUARIO
                .Where(x => 
                    x.id_rolUsuario == 1 && (
                    DbFunctions.Like(x.nombre, "%" + search + "%") ||
                    DbFunctions.Like(x.email, "%" + search + "%") ||
                    DbFunctions.Like(x.telefono, "%" + search + "%") ||
                    DbFunctions.Like(x.ocupacion, "%" + search + "%") ||
                    DbFunctions.Like(x.direccion, "%" + search + "%") ||
                    DbFunctions.Like(x.institucion, "%" + search + "%") ||
                    DbFunctions.Like(x.ROLUSUARIO.rol, "%" + search + "%")))
                .OrderBy(sorted).Skip((PAGINADOR.meta.currentPage - 1) * limit).Take(limit).ToList();
            }
            else
            {
                int total = db.USUARIO
                .Where(x =>
                    x.id_Usuario != id_Usuario && (
                    DbFunctions.Like(x.nombre, "%" + search + "%") ||
                    DbFunctions.Like(x.email, "%" + search + "%") ||
                    DbFunctions.Like(x.telefono, "%" + search + "%") ||
                    DbFunctions.Like(x.ocupacion, "%" + search + "%") ||
                    DbFunctions.Like(x.direccion, "%" + search + "%") ||
                    DbFunctions.Like(x.institucion, "%" + search + "%") ||
                    DbFunctions.Like(x.ROLUSUARIO.rol, "%" + search + "%")))
                .OrderBy(sorted).Count();

                PAGINADOR.meta.totalItems = total;
                PAGINADOR.meta.itemsPerPage = limit;
                Double totalPages = (total + limit - 1) / limit;
                PAGINADOR.meta.totalPages = (int)Math.Round(totalPages);
                PAGINADOR.meta.currentPage = page > PAGINADOR.meta.totalPages ? 1 : page;

                users = db.USUARIO
                .Where(x =>
                    x.id_Usuario != id_Usuario && (
                    DbFunctions.Like(x.nombre, "%" + search + "%") ||
                    DbFunctions.Like(x.email, "%" + search + "%") ||
                    DbFunctions.Like(x.telefono, "%" + search + "%") ||
                    DbFunctions.Like(x.ocupacion, "%" + search + "%") ||
                    DbFunctions.Like(x.direccion, "%" + search + "%") ||
                    DbFunctions.Like(x.institucion, "%" + search + "%") ||
                    DbFunctions.Like(x.ROLUSUARIO.rol, "%" + search + "%")))
                .OrderBy(sorted).Skip((PAGINADOR.meta.currentPage - 1) * limit).Take(limit).ToList();
            }
            
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
                PAGINADOR.data.Add(uSUARIO);
            }

            return Ok(PAGINADOR);
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
        public async Task<IHttpActionResult> PutUSUARIO(string id, USUARIO_P uSUARIOP)
        {
            var getUser = db.USUARIO.Where(x => x.id_Usuario == id).FirstOrDefault();            
            //uSUARIO.id_Usuario = uSUARIOP.id_Usuario;
            getUser.nombre = uSUARIOP.nombre;
            getUser.email = uSUARIOP.email;
            getUser.telefono = uSUARIOP.telefono;
            getUser.ocupacion = uSUARIOP.ocupacion;
            getUser.direccion = uSUARIOP.direccion;
            getUser.fotografia = uSUARIOP.fotografia;
            getUser.institucion = uSUARIOP.institucion;
            getUser.id_rolUsuario = uSUARIOP.id_rolUsuario;


            if(uSUARIOP.contrasena != "") {

                getUser.contrasena = Encoding.UTF8.GetBytes(uSUARIOP.contrasena);
            }
            else
            {
                getUser.contrasena = db.USUARIO.Where(x => x.id_Usuario == id).FirstOrDefault().contrasena;
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != getUser.id_Usuario)
            {
                return BadRequest();
            }

            db.Entry(getUser).State = EntityState.Modified;

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
        public async Task<IHttpActionResult> PostUSUARIO(USUARIO_P uSUARIOP)
        {
            USUARIO uSUARIO = new USUARIO();
            uSUARIO.id_Usuario = uSUARIOP.id_Usuario;
            uSUARIO.nombre = uSUARIOP.nombre;
            uSUARIO.email = uSUARIOP.email;
            uSUARIO.telefono = uSUARIOP.telefono;
            uSUARIO.ocupacion = uSUARIOP.ocupacion;
            uSUARIO.direccion = uSUARIOP.direccion;
            uSUARIO.fotografia = uSUARIOP.fotografia;
            uSUARIO.institucion = uSUARIOP.institucion;
            uSUARIO.id_rolUsuario = uSUARIOP.id_rolUsuario;

            if (uSUARIOP.contrasena == null)
            {
                return BadRequest();
            }

            uSUARIO.contrasena = Encoding.UTF8.GetBytes(uSUARIOP.contrasena);
            var verifyiD = db.USUARIO.Find(uSUARIO.id_Usuario);

            if(verifyiD == null)
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
            }
            else
            {
                return BadRequest();
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