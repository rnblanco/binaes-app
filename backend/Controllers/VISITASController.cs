using backend.Constants;
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
    public class VISITASController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/VISITAS
        public IQueryable<VISITAS_A_U> GetVISITAS()
        {
            var visitas = db.VISITAS.ToList();
            List<VISITAS_A_U> visitsList = new List<VISITAS_A_U>();

            foreach (var visita in visitas)
            {
                VISITAS_A_U v = new VISITAS_A_U();
                v.id_Visita = visita.id_Visita;
                v.fh_entrada = visita.fh_entrada;
                v.fh_salida = visita.fh_salida;

                v.USUARIO = new USUARIO_rU();
                v.USUARIO.id_Usuario = visita.USUARIO.id_Usuario;
                v.USUARIO.nombre = visita.USUARIO.nombre;
                v.USUARIO.email = visita.USUARIO.email;
                v.USUARIO.telefono = visita.USUARIO.telefono;
                v.USUARIO.ocupacion = visita.USUARIO.ocupacion;
                v.USUARIO.direccion = visita.USUARIO.direccion;
                v.USUARIO.fotografia = Encoding.UTF8.GetString(visita.USUARIO.fotografia);
                v.USUARIO.institucion = visita.USUARIO.institucion;
                v.USUARIO.ROLUSUARIO = visita.USUARIO.ROLUSUARIO;

                v.AREA = new AREA_PA_U_TA();
                v.AREA.id_Area = visita.AREA.id_Area;
                v.AREA.nombre = visita.AREA.nombre;
                v.AREA.descripcion = visita.AREA.descripcion;
                v.AREA.PISOAREA = visita.AREA.PISOAREA;

                v.AREA.USUARIO = new USUARIO_rU();
                v.AREA.USUARIO.id_Usuario = visita.AREA.USUARIO.id_Usuario;
                v.AREA.USUARIO.nombre = visita.AREA.USUARIO.nombre;
                v.AREA.USUARIO.email = visita.AREA.USUARIO.email;
                v.AREA.USUARIO.telefono = visita.AREA.USUARIO.telefono;
                v.AREA.USUARIO.ocupacion = visita.AREA.USUARIO.ocupacion;
                v.AREA.USUARIO.direccion = visita.AREA.USUARIO.direccion;
                v.AREA.USUARIO.fotografia = Encoding.UTF8.GetString(visita.AREA.USUARIO.fotografia);
                v.AREA.USUARIO.institucion = visita.AREA.USUARIO.institucion;
                v.AREA.USUARIO.ROLUSUARIO = visita.AREA.USUARIO.ROLUSUARIO;

                v.AREA.TIPOAREA = visita.AREA.TIPOAREA;

                visitsList.Add(v);
            }
            return visitsList.AsQueryable();
        }

        [ResponseType(typeof(VISITAS_A_U))]
        // GET: api/VISITAS?limit=5&page=1&search=test&sortby=col:ASC
        public async Task<IHttpActionResult> GetVisitas(int limit, int page, string search, string SortBy)
        {
            var sorted = "id_Area ascending";
            if (SortBy != null)
            {
                string[] sortby = SortBy.Split(':');
                sorted = sortby[0] + " " + (sortby[1].Equals("ASC") ? "ascending" : "descending");
            }

            int total = db.VISITAS
                .Where(x =>
                    DbFunctions.Like(x.USUARIO.nombre, "%" + search + "%") ||
                    DbFunctions.Like(x.AREA.nombre, "%" + search + "%") ||
                    DbFunctions.Like(DbFunctions.TruncateTime(x.fh_entrada).ToString(), "%" + search + "%") ||
                    DbFunctions.Like(DbFunctions.TruncateTime(x.fh_salida).ToString(), "%" + search + "%")
                ).OrderBy(sorted).Count();

            VISITA_PAGINADOR PAGINADOR = new VISITA_PAGINADOR();
            PAGINADOR.meta = new Meta();
            PAGINADOR.meta.totalItems = total;
            PAGINADOR.meta.itemsPerPage = limit;
            Double totalPages = (total + limit - 1) / limit;
            PAGINADOR.meta.totalPages = (int)Math.Round(totalPages);
            PAGINADOR.meta.currentPage = page > PAGINADOR.meta.totalPages ? 1 : page;
            PAGINADOR.data = new List<VISITAS_A_U>();

            var visitas = db.VISITAS
                .Where(x =>
                    DbFunctions.Like(x.USUARIO.nombre, "%" + search + "%") ||
                    DbFunctions.Like(x.AREA.nombre, "%" + search + "%") ||
                    DbFunctions.Like(DbFunctions.TruncateTime(x.fh_entrada).ToString(), "%" + search + "%") ||
                    DbFunctions.Like(DbFunctions.TruncateTime(x.fh_salida).ToString(), "%" + search + "%")
                ).OrderBy(sorted).Skip((PAGINADOR.meta.currentPage - 1) * limit).Take(limit).ToList();

            foreach (var visita in visitas)
            {
                VISITAS_A_U v = new VISITAS_A_U();
                v.id_Visita = visita.id_Visita;
                v.fh_entrada = visita.fh_entrada;
                v.fh_salida = visita.fh_salida;

                v.USUARIO = new USUARIO_rU();
                v.USUARIO.id_Usuario = visita.USUARIO.id_Usuario;
                v.USUARIO.nombre = visita.USUARIO.nombre;
                v.USUARIO.email = visita.USUARIO.email;
                v.USUARIO.telefono = visita.USUARIO.telefono;
                v.USUARIO.ocupacion = visita.USUARIO.ocupacion;
                v.USUARIO.direccion = visita.USUARIO.direccion;
                v.USUARIO.fotografia = Encoding.UTF8.GetString(visita.USUARIO.fotografia);
                v.USUARIO.institucion = visita.USUARIO.institucion;
                v.USUARIO.ROLUSUARIO = visita.USUARIO.ROLUSUARIO;

                v.AREA = new AREA_PA_U_TA();
                v.AREA.id_Area = visita.AREA.id_Area;
                v.AREA.nombre = visita.AREA.nombre;
                v.AREA.descripcion = visita.AREA.descripcion;
                v.AREA.PISOAREA = visita.AREA.PISOAREA;

                v.AREA.USUARIO = new USUARIO_rU();
                v.AREA.USUARIO.id_Usuario = visita.AREA.USUARIO.id_Usuario;
                v.AREA.USUARIO.nombre = visita.AREA.USUARIO.nombre;
                v.AREA.USUARIO.email = visita.AREA.USUARIO.email;
                v.AREA.USUARIO.telefono = visita.AREA.USUARIO.telefono;
                v.AREA.USUARIO.ocupacion = visita.AREA.USUARIO.ocupacion;
                v.AREA.USUARIO.direccion = visita.AREA.USUARIO.direccion;
                v.AREA.USUARIO.fotografia = Encoding.UTF8.GetString(visita.AREA.USUARIO.fotografia);
                v.AREA.USUARIO.institucion = visita.AREA.USUARIO.institucion;
                v.AREA.USUARIO.ROLUSUARIO = visita.AREA.USUARIO.ROLUSUARIO;

                v.AREA.TIPOAREA = visita.AREA.TIPOAREA;
                PAGINADOR.data.Add(v);
            }

            return Ok(PAGINADOR);
        }

        // GET: api/VISITAS/5
        [ResponseType(typeof(VISITAS_A_U))]
        public async Task<IHttpActionResult> GetVISITAS(int id)
        {
            var visita = await db.VISITAS.FindAsync(id);
            VISITAS_A_U v = new VISITAS_A_U();
            if (visita == null)
            {
                return NotFound();
            }
            else
            {
                v.id_Visita = visita.id_Visita;
                v.fh_entrada = visita.fh_entrada;
                v.fh_salida = visita.fh_salida;

                v.USUARIO = new USUARIO_rU();
                v.USUARIO.id_Usuario = visita.USUARIO.id_Usuario;
                v.USUARIO.nombre = visita.USUARIO.nombre;
                v.USUARIO.email = visita.USUARIO.email;
                v.USUARIO.telefono = visita.USUARIO.telefono;
                v.USUARIO.ocupacion = visita.USUARIO.ocupacion;
                v.USUARIO.direccion = visita.USUARIO.direccion;
                v.USUARIO.fotografia = Encoding.UTF8.GetString(visita.USUARIO.fotografia);
                v.USUARIO.institucion = visita.USUARIO.institucion;
                v.USUARIO.ROLUSUARIO = visita.USUARIO.ROLUSUARIO;

                v.AREA = new AREA_PA_U_TA();
                v.AREA.id_Area = visita.AREA.id_Area;
                v.AREA.nombre = visita.AREA.nombre;
                v.AREA.descripcion = visita.AREA.descripcion;
                v.AREA.PISOAREA = visita.AREA.PISOAREA;

                v.AREA.USUARIO = new USUARIO_rU();
                v.AREA.USUARIO.id_Usuario = visita.AREA.USUARIO.id_Usuario;
                v.AREA.USUARIO.nombre = visita.AREA.USUARIO.nombre;
                v.AREA.USUARIO.email = visita.AREA.USUARIO.email;
                v.AREA.USUARIO.telefono = visita.AREA.USUARIO.telefono;
                v.AREA.USUARIO.ocupacion = visita.AREA.USUARIO.ocupacion;
                v.AREA.USUARIO.direccion = visita.AREA.USUARIO.direccion;
                v.AREA.USUARIO.fotografia = Encoding.UTF8.GetString(visita.AREA.USUARIO.fotografia);
                v.AREA.USUARIO.institucion = visita.AREA.USUARIO.institucion;
                v.AREA.USUARIO.ROLUSUARIO = visita.AREA.USUARIO.ROLUSUARIO;

                v.AREA.TIPOAREA = visita.AREA.TIPOAREA;
            }

            return Ok(v);
        }

        // PUT: api/VISITAS/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutVISITAS(int id, VISITAS vISITAS)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != vISITAS.id_Visita)
            {
                return BadRequest();
            }

            db.Entry(vISITAS).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VISITASExists(id))
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

        // POST: api/VISITAS
        [ResponseType(typeof(VISITAS))]
        public async Task<IHttpActionResult> PostVISITAS(VISITAS vISITAS)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            VISITAS visita = db.VISITAS.Where( x =>
                x.USUARIO.id_Usuario == vISITAS.id_Usuario &&
                x.AREA.id_Area == vISITAS.id_Area &&
                x.fh_salida == null
            ).FirstOrDefault();

            if (visita == null) {
                db.VISITAS.Add(vISITAS);
                await db.SaveChangesAsync();
                return CreatedAtRoute("DefaultApi", new { id = vISITAS.id_Visita }, vISITAS);
            }

            visita.fh_salida = vISITAS.fh_entrada;

            return await PutVISITAS(visita.id_Visita, visita);
        }

        // DELETE: api/VISITAS/5
        [ResponseType(typeof(VISITAS))]
        public async Task<IHttpActionResult> DeleteVISITAS(int id)
        {
            VISITAS vISITAS = await db.VISITAS.FindAsync(id);
            if (vISITAS == null)
            {
                return NotFound();
            }

            db.VISITAS.Remove(vISITAS);
            await db.SaveChangesAsync();

            return Ok(vISITAS);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool VISITASExists(int id)
        {
            return db.VISITAS.Count(e => e.id_Visita == id) > 0;
        }
    }
}