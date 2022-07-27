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
    public class COLECCIONController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/COLECCION
        public IQueryable<COLECCION_A_GC_TC> GetCOLECCION()
        {
            var collections = db.COLECCION.ToList();
            List<COLECCION_A_GC_TC> collectionsList = new List<COLECCION_A_GC_TC>();
            foreach (var collection in collections)
            {
                COLECCION_A_GC_TC cOLECCION = new COLECCION_A_GC_TC();
                cOLECCION.id_Coleccion = collection.id_Coleccion;
                cOLECCION.nombre = collection.nombre;
                cOLECCION.AREA = new AREA_PA_U_TA();
                cOLECCION.AREA.id_Area = collection.AREA.id_Area;
                cOLECCION.AREA.nombre = collection.AREA.nombre;
                cOLECCION.AREA.descripcion = collection.AREA.descripcion;
                cOLECCION.AREA.PISOAREA = collection.AREA.PISOAREA;                

                cOLECCION.AREA.TIPOAREA = collection.AREA.TIPOAREA;
                cOLECCION.GENEROCOLECCION = collection.GENEROCOLECCION;
                cOLECCION.TIPOCOLECCION = collection.TIPOCOLECCION;
                collectionsList.Add(cOLECCION);
            }
            return collectionsList.AsQueryable();
        }

        [ResponseType(typeof(COLECCION_A_GC_TC))]
        // GET: api/COLECCION?limit=5&page=1&search=test&sortby=col:ASC
        public async Task<IHttpActionResult> GetCOLECCION(int limit, int page, string search, string SortBy)
        {            
            var sorted = "id_Coleccion ascending";
            if (SortBy != null)
            {
                string[] sortby = SortBy.Split(':');
                sorted = sortby[0] + " " + (sortby[1].Equals("ASC") ? "ascending" : "descending");
            }

            int total = db.COLECCION
                .Where(x =>
                    DbFunctions.Like(x.nombre, "%" + search + "%") ||
                    DbFunctions.Like(x.TIPOCOLECCION.tipoColeccion1, "%" + search + "%") ||
                    DbFunctions.Like(x.GENEROCOLECCION.generoColeccion1, "%" + search + "%") ||
                    DbFunctions.Like(x.AREA.nombre, "%" + search + "%"))
                .OrderBy(sorted).Count();

            COLECCION_PAGINADOR PAGINADOR = new COLECCION_PAGINADOR();
            PAGINADOR.meta = new Meta();
            PAGINADOR.meta.totalItems = total;
            PAGINADOR.meta.itemsPerPage = limit;
            Double totalPages = (total + limit - 1) / limit;
            PAGINADOR.meta.totalPages = (int)Math.Round(totalPages);
            PAGINADOR.meta.currentPage = page > PAGINADOR.meta.totalPages ? 1 : page;
            PAGINADOR.data = new List<COLECCION_A_GC_TC>();

            var collections = db.COLECCION
                .Where(x =>
                    DbFunctions.Like(x.nombre, "%" + search + "%") ||
                    DbFunctions.Like(x.TIPOCOLECCION.tipoColeccion1, "%" + search + "%") ||
                    DbFunctions.Like(x.GENEROCOLECCION.generoColeccion1, "%" + search + "%") ||
                    DbFunctions.Like(x.AREA.nombre, "%" + search + "%"))
                .OrderBy(sorted).Skip((PAGINADOR.meta.currentPage - 1) * limit).Take(limit).ToList();
            
            foreach (var collection in collections)
            {
                COLECCION_A_GC_TC cOLECCION = new COLECCION_A_GC_TC();
                cOLECCION.id_Coleccion = collection.id_Coleccion;
                cOLECCION.nombre = collection.nombre;
                cOLECCION.AREA = new AREA_PA_U_TA();
                cOLECCION.AREA.id_Area = collection.AREA.id_Area;
                cOLECCION.AREA.nombre = collection.AREA.nombre;
                cOLECCION.AREA.descripcion = collection.AREA.descripcion;
                cOLECCION.AREA.PISOAREA = collection.AREA.PISOAREA;                

                cOLECCION.AREA.TIPOAREA = collection.AREA.TIPOAREA;
                cOLECCION.GENEROCOLECCION = collection.GENEROCOLECCION;
                cOLECCION.TIPOCOLECCION = collection.TIPOCOLECCION;
                PAGINADOR.data.Add(cOLECCION);
            }

            return Ok(PAGINADOR);
        }

        // GET: api/COLECCION/5
        [ResponseType(typeof(COLECCION_A_GC_TC))]
        public async Task<IHttpActionResult> GetCOLECCION(int id)
        {
            var collection = await db.COLECCION.FindAsync(id);
            COLECCION_A_GC_TC cOLECCION = new COLECCION_A_GC_TC();
            if (collection == null)
            {
                return NotFound();
            }
            else
            {
                cOLECCION.id_Coleccion = collection.id_Coleccion;
                cOLECCION.nombre = collection.nombre;
                cOLECCION.AREA = new AREA_PA_U_TA();
                cOLECCION.AREA.id_Area = collection.AREA.id_Area;
                cOLECCION.AREA.nombre = collection.AREA.nombre;
                cOLECCION.AREA.descripcion = collection.AREA.descripcion;
                cOLECCION.AREA.PISOAREA = collection.AREA.PISOAREA;

                cOLECCION.AREA.USUARIO = new USUARIO_rU();
                cOLECCION.AREA.USUARIO.id_Usuario = collection.AREA.USUARIO.id_Usuario;
                cOLECCION.AREA.USUARIO.nombre = collection.AREA.USUARIO.nombre;
                cOLECCION.AREA.USUARIO.email = collection.AREA.USUARIO.email;
                cOLECCION.AREA.USUARIO.telefono = collection.AREA.USUARIO.telefono;
                cOLECCION.AREA.USUARIO.ocupacion = collection.AREA.USUARIO.ocupacion;
                cOLECCION.AREA.USUARIO.direccion = collection.AREA.USUARIO.direccion;
                cOLECCION.AREA.USUARIO.fotografia = Encoding.UTF8.GetString(collection.AREA.USUARIO.fotografia);
                cOLECCION.AREA.USUARIO.institucion = collection.AREA.USUARIO.institucion;
                cOLECCION.AREA.USUARIO.ROLUSUARIO = collection.AREA.USUARIO.ROLUSUARIO;

                cOLECCION.AREA.TIPOAREA = collection.AREA.TIPOAREA;
                cOLECCION.GENEROCOLECCION = collection.GENEROCOLECCION;
                cOLECCION.TIPOCOLECCION = collection.TIPOCOLECCION;
            }

            return Ok(cOLECCION);
        }

        // PUT: api/COLECCION/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutCOLECCION(int id, COLECCION cOLECCION)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != cOLECCION.id_Coleccion)
            {
                return BadRequest();
            }

            db.Entry(cOLECCION).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!COLECCIONExists(id))
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

        // POST: api/COLECCION
        [ResponseType(typeof(COLECCION))]
        public async Task<IHttpActionResult> PostCOLECCION(COLECCION cOLECCION)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.COLECCION.Add(cOLECCION);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = cOLECCION.id_Coleccion }, cOLECCION);
        }

        // DELETE: api/COLECCION/5
        [ResponseType(typeof(COLECCION))]
        public async Task<IHttpActionResult> DeleteCOLECCION(int id)
        {
            COLECCION cOLECCION = await db.COLECCION.FindAsync(id);
            if (cOLECCION == null)
            {
                return NotFound();
            }

            db.COLECCION.Remove(cOLECCION);
            await db.SaveChangesAsync();

            return Ok(cOLECCION);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool COLECCIONExists(int id)
        {
            return db.COLECCION.Count(e => e.id_Coleccion == id) > 0;
        }
    }
}