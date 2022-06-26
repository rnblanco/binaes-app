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
    public class EJEMPLARController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/EJEMPLAR
        public IQueryable<EJEMPLAR_E_F_I_C> GetEJEMPLAR()
        {
            var exemplars = db.EJEMPLAR.ToList();
            List<EJEMPLAR_E_F_I_C> exemplarsList = new List<EJEMPLAR_E_F_I_C>();
            foreach (var exemplar in exemplars)
            {
                EJEMPLAR_E_F_I_C eJEMPLAR = new EJEMPLAR_E_F_I_C();
                eJEMPLAR.id_Ejemplar = exemplar.id_Ejemplar;
                eJEMPLAR.nombre = exemplar.nombre;
                eJEMPLAR.imagen = Encoding.UTF8.GetString(exemplar.imagen);
                eJEMPLAR.EDITORIAL = exemplar.EDITORIAL;
                eJEMPLAR.FORMATOEJEMPLAR = exemplar.FORMATOEJEMPLAR;
                eJEMPLAR.IDIOMAEJEMPLAR = exemplar.IDIOMAEJEMPLAR;
                eJEMPLAR.f_publicacion = exemplar.f_publicacion;

                eJEMPLAR.COLECCION = new COLECCION_A_GC_TC();
                eJEMPLAR.COLECCION.id_Coleccion = exemplar.COLECCION.id_Coleccion;
                eJEMPLAR.COLECCION.nombre = exemplar.COLECCION.nombre;

                eJEMPLAR.COLECCION.AREA = new AREA_PA_U_TA();
                eJEMPLAR.COLECCION.AREA.id_Area = exemplar.COLECCION.AREA.id_Area;
                eJEMPLAR.COLECCION.AREA.nombre = exemplar.COLECCION.AREA.nombre;
                eJEMPLAR.COLECCION.AREA.descripcion = exemplar.COLECCION.AREA.descripcion;
                eJEMPLAR.COLECCION.AREA.PISOAREA = exemplar.COLECCION.AREA.PISOAREA;

                eJEMPLAR.COLECCION.AREA.USUARIO = new USUARIO_rU();
                eJEMPLAR.COLECCION.AREA.USUARIO.id_Usuario = exemplar.COLECCION.AREA.USUARIO.id_Usuario;
                eJEMPLAR.COLECCION.AREA.USUARIO.nombre = exemplar.COLECCION.AREA.USUARIO.nombre;
                eJEMPLAR.COLECCION.AREA.USUARIO.email = exemplar.COLECCION.AREA.USUARIO.email;
                eJEMPLAR.COLECCION.AREA.USUARIO.telefono = exemplar.COLECCION.AREA.USUARIO.telefono;
                eJEMPLAR.COLECCION.AREA.USUARIO.ocupacion = exemplar.COLECCION.AREA.USUARIO.ocupacion;
                eJEMPLAR.COLECCION.AREA.USUARIO.direccion = exemplar.COLECCION.AREA.USUARIO.direccion;
                eJEMPLAR.COLECCION.AREA.USUARIO.fotografia = exemplar.COLECCION.AREA.USUARIO.fotografia;
                eJEMPLAR.COLECCION.AREA.USUARIO.institucion = exemplar.COLECCION.AREA.USUARIO.institucion;
                eJEMPLAR.COLECCION.AREA.USUARIO.ROLUSUARIO = exemplar.COLECCION.AREA.USUARIO.ROLUSUARIO;

                eJEMPLAR.COLECCION.AREA.TIPOAREA = exemplar.COLECCION.AREA.TIPOAREA;

                eJEMPLAR.COLECCION.GENEROCOLECCION = exemplar.COLECCION.GENEROCOLECCION;
                eJEMPLAR.COLECCION.TIPOCOLECCION = exemplar.COLECCION.TIPOCOLECCION;
                exemplarsList.Add(eJEMPLAR);
            }
            return exemplarsList.AsQueryable();
        }

        // GET: api/EJEMPLAR?limit=5&page=1&search=test&sortby=col:ASC
        public IQueryable<EJEMPLAR_E_F_I_C> GetEJEMPLAR(int limit, int page, string search, string SortBy)
        {
            var sorted = "id_Ejemplar ascending";
            if (SortBy != null)
            {
                string[] sortby = SortBy.Split(':');
                sorted = sortby[0] + " " + (sortby[1].Equals("ASC") ? "ascending" : "descending");
            }
            var exemplars = db.EJEMPLAR
                .Where(x =>
                    DbFunctions.Like(x.nombre, "%" + search + "%") ||
                    DbFunctions.Like(x.EDITORIAL.editorial1, "%" + search + "%") ||
                    DbFunctions.Like(x.FORMATOEJEMPLAR.formato, "%" + search + "%") ||
                    DbFunctions.Like(x.IDIOMAEJEMPLAR.idioma, "%" + search + "%") ||
                    DbFunctions.Like(DbFunctions.TruncateTime(x.f_publicacion).ToString(), "%" + search + "%") ||
                    DbFunctions.Like(x.COLECCION.nombre, "%" + search + "%") ||
                    DbFunctions.Like(x.COLECCION.AREA.nombre, "%" + search + "%") ||
                    DbFunctions.Like(x.COLECCION.GENEROCOLECCION.generoColeccion1, "%" + search + "%") ||
                    DbFunctions.Like(x.COLECCION.TIPOCOLECCION.tipoColeccion1, "%" + search + "%"))
                .OrderBy(sorted).Skip((page - 1) * limit).Take(limit).ToList();
            List<EJEMPLAR_E_F_I_C> exemplarsList = new List<EJEMPLAR_E_F_I_C>();
            foreach (var exemplar in exemplars)
            {
                EJEMPLAR_E_F_I_C eJEMPLAR = new EJEMPLAR_E_F_I_C();
                eJEMPLAR.id_Ejemplar = exemplar.id_Ejemplar;
                eJEMPLAR.nombre = exemplar.nombre;
                eJEMPLAR.imagen = Encoding.UTF8.GetString(exemplar.imagen);
                eJEMPLAR.EDITORIAL = exemplar.EDITORIAL;
                eJEMPLAR.FORMATOEJEMPLAR = exemplar.FORMATOEJEMPLAR;
                eJEMPLAR.IDIOMAEJEMPLAR = exemplar.IDIOMAEJEMPLAR;
                eJEMPLAR.f_publicacion = exemplar.f_publicacion;

                eJEMPLAR.COLECCION = new COLECCION_A_GC_TC();
                eJEMPLAR.COLECCION.id_Coleccion = exemplar.COLECCION.id_Coleccion;
                eJEMPLAR.COLECCION.nombre = exemplar.COLECCION.nombre;

                eJEMPLAR.COLECCION.AREA = new AREA_PA_U_TA();
                eJEMPLAR.COLECCION.AREA.id_Area = exemplar.COLECCION.AREA.id_Area;
                eJEMPLAR.COLECCION.AREA.nombre = exemplar.COLECCION.AREA.nombre;
                eJEMPLAR.COLECCION.AREA.descripcion = exemplar.COLECCION.AREA.descripcion;
                eJEMPLAR.COLECCION.AREA.PISOAREA = exemplar.COLECCION.AREA.PISOAREA;

                eJEMPLAR.COLECCION.AREA.USUARIO = new USUARIO_rU();
                eJEMPLAR.COLECCION.AREA.USUARIO.id_Usuario = exemplar.COLECCION.AREA.USUARIO.id_Usuario;
                eJEMPLAR.COLECCION.AREA.USUARIO.nombre = exemplar.COLECCION.AREA.USUARIO.nombre;
                eJEMPLAR.COLECCION.AREA.USUARIO.email = exemplar.COLECCION.AREA.USUARIO.email;
                eJEMPLAR.COLECCION.AREA.USUARIO.telefono = exemplar.COLECCION.AREA.USUARIO.telefono;
                eJEMPLAR.COLECCION.AREA.USUARIO.ocupacion = exemplar.COLECCION.AREA.USUARIO.ocupacion;
                eJEMPLAR.COLECCION.AREA.USUARIO.direccion = exemplar.COLECCION.AREA.USUARIO.direccion;
                eJEMPLAR.COLECCION.AREA.USUARIO.fotografia = exemplar.COLECCION.AREA.USUARIO.fotografia;
                eJEMPLAR.COLECCION.AREA.USUARIO.institucion = exemplar.COLECCION.AREA.USUARIO.institucion;
                eJEMPLAR.COLECCION.AREA.USUARIO.ROLUSUARIO = exemplar.COLECCION.AREA.USUARIO.ROLUSUARIO;

                eJEMPLAR.COLECCION.AREA.TIPOAREA = exemplar.COLECCION.AREA.TIPOAREA;

                eJEMPLAR.COLECCION.GENEROCOLECCION = exemplar.COLECCION.GENEROCOLECCION;
                eJEMPLAR.COLECCION.TIPOCOLECCION = exemplar.COLECCION.TIPOCOLECCION;
                exemplarsList.Add(eJEMPLAR);
            }
            return exemplarsList.AsQueryable();
        }

        // GET: api/EJEMPLAR/5
        [ResponseType(typeof(EJEMPLAR_E_F_I_C))]
        public async Task<IHttpActionResult> GetEJEMPLAR(int id)
        {
            var exemplar = await db.EJEMPLAR.FindAsync(id);
            EJEMPLAR_E_F_I_C eJEMPLAR = new EJEMPLAR_E_F_I_C();
            if (exemplar == null)
            {
                return NotFound();
            }
            else
            {
                eJEMPLAR.id_Ejemplar = exemplar.id_Ejemplar;
                eJEMPLAR.nombre = exemplar.nombre;
                eJEMPLAR.imagen = Encoding.UTF8.GetString(exemplar.imagen);
                eJEMPLAR.EDITORIAL = exemplar.EDITORIAL;
                eJEMPLAR.FORMATOEJEMPLAR = exemplar.FORMATOEJEMPLAR;
                eJEMPLAR.IDIOMAEJEMPLAR = exemplar.IDIOMAEJEMPLAR;
                eJEMPLAR.f_publicacion = exemplar.f_publicacion;

                eJEMPLAR.COLECCION = new COLECCION_A_GC_TC();
                eJEMPLAR.COLECCION.id_Coleccion = exemplar.COLECCION.id_Coleccion;
                eJEMPLAR.COLECCION.nombre = exemplar.COLECCION.nombre;

                eJEMPLAR.COLECCION.AREA = new AREA_PA_U_TA();
                eJEMPLAR.COLECCION.AREA.id_Area = exemplar.COLECCION.AREA.id_Area;
                eJEMPLAR.COLECCION.AREA.nombre = exemplar.COLECCION.AREA.nombre;
                eJEMPLAR.COLECCION.AREA.descripcion = exemplar.COLECCION.AREA.descripcion;
                eJEMPLAR.COLECCION.AREA.PISOAREA = exemplar.COLECCION.AREA.PISOAREA;

                eJEMPLAR.COLECCION.AREA.USUARIO = new USUARIO_rU();
                eJEMPLAR.COLECCION.AREA.USUARIO.id_Usuario = exemplar.COLECCION.AREA.USUARIO.id_Usuario;
                eJEMPLAR.COLECCION.AREA.USUARIO.nombre = exemplar.COLECCION.AREA.USUARIO.nombre;
                eJEMPLAR.COLECCION.AREA.USUARIO.email = exemplar.COLECCION.AREA.USUARIO.email;
                eJEMPLAR.COLECCION.AREA.USUARIO.telefono = exemplar.COLECCION.AREA.USUARIO.telefono;
                eJEMPLAR.COLECCION.AREA.USUARIO.ocupacion = exemplar.COLECCION.AREA.USUARIO.ocupacion;
                eJEMPLAR.COLECCION.AREA.USUARIO.direccion = exemplar.COLECCION.AREA.USUARIO.direccion;
                eJEMPLAR.COLECCION.AREA.USUARIO.fotografia = exemplar.COLECCION.AREA.USUARIO.fotografia;
                eJEMPLAR.COLECCION.AREA.USUARIO.institucion = exemplar.COLECCION.AREA.USUARIO.institucion;
                eJEMPLAR.COLECCION.AREA.USUARIO.ROLUSUARIO = exemplar.COLECCION.AREA.USUARIO.ROLUSUARIO;

                eJEMPLAR.COLECCION.AREA.TIPOAREA = exemplar.COLECCION.AREA.TIPOAREA;

                eJEMPLAR.COLECCION.GENEROCOLECCION = exemplar.COLECCION.GENEROCOLECCION;
                eJEMPLAR.COLECCION.TIPOCOLECCION = exemplar.COLECCION.TIPOCOLECCION;
            }

            return Ok(eJEMPLAR);
        }

        // PUT: api/EJEMPLAR/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutEJEMPLAR(int id, EJEMPLAR eJEMPLAR)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != eJEMPLAR.id_Ejemplar)
            {
                return BadRequest();
            }

            db.Entry(eJEMPLAR).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EJEMPLARExists(id))
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

        // POST: api/EJEMPLAR
        [ResponseType(typeof(EJEMPLAR))]
        public async Task<IHttpActionResult> PostEJEMPLAR(EJEMPLAR eJEMPLAR)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.EJEMPLAR.Add(eJEMPLAR);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = eJEMPLAR.id_Ejemplar }, eJEMPLAR);
        }

        // DELETE: api/EJEMPLAR/5
        [ResponseType(typeof(EJEMPLAR))]
        public async Task<IHttpActionResult> DeleteEJEMPLAR(int id)
        {
            EJEMPLAR eJEMPLAR = await db.EJEMPLAR.FindAsync(id);
            if (eJEMPLAR == null)
            {
                return NotFound();
            }

            db.EJEMPLAR.Remove(eJEMPLAR);
            await db.SaveChangesAsync();

            return Ok(eJEMPLAR);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EJEMPLARExists(int id)
        {
            return db.EJEMPLAR.Count(e => e.id_Ejemplar == id) > 0;
        }
    }
}