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
    public class PRESTAMOController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/PRESTAMO
        public IQueryable<PRESTAMO_E> GetPRESTAMO()
        {
            var borrows = db.PRESTAMO.ToList();
            List<PRESTAMO_E> borrowsList = new List<PRESTAMO_E>();
            foreach (var borrow in borrows)
            {
                PRESTAMO_E pRESTAMO = new PRESTAMO_E();
                pRESTAMO.id_Prestamo = borrow.id_Prestamo;
                pRESTAMO.fh_Prestamo = borrow.fh_Prestamo;
                pRESTAMO.fh_Devolucion = borrow.fh_Devolucion;
                pRESTAMO.ESTADOS = borrow.ESTADOS;

                pRESTAMO.USUARIO = new USUARIO_rU();
                pRESTAMO.USUARIO.id_Usuario = borrow.USUARIO.id_Usuario;
                pRESTAMO.USUARIO.nombre = borrow.USUARIO.nombre;
                pRESTAMO.USUARIO.email = borrow.USUARIO.email;
                pRESTAMO.USUARIO.telefono = borrow.USUARIO.telefono;
                pRESTAMO.USUARIO.ocupacion = borrow.USUARIO.ocupacion;
                pRESTAMO.USUARIO.direccion = borrow.USUARIO.direccion;
                pRESTAMO.USUARIO.fotografia = Encoding.UTF8.GetString(borrow.USUARIO.fotografia);
                pRESTAMO.USUARIO.institucion = borrow.USUARIO.institucion;
                pRESTAMO.USUARIO.ROLUSUARIO = borrow.USUARIO.ROLUSUARIO;

                pRESTAMO.EJEMPLAR = new EJEMPLAR_E_F_I_C();
                pRESTAMO.EJEMPLAR.id_Ejemplar = borrow.EJEMPLAR.id_Ejemplar;
                pRESTAMO.EJEMPLAR.nombre = borrow.EJEMPLAR.nombre;
                pRESTAMO.EJEMPLAR.imagen = Encoding.UTF8.GetString(borrow.EJEMPLAR.imagen);
                pRESTAMO.EJEMPLAR.EDITORIAL = borrow.EJEMPLAR.EDITORIAL;
                pRESTAMO.EJEMPLAR.FORMATOEJEMPLAR = borrow.EJEMPLAR.FORMATOEJEMPLAR;
                pRESTAMO.EJEMPLAR.IDIOMAEJEMPLAR = borrow.EJEMPLAR.IDIOMAEJEMPLAR;
                pRESTAMO.EJEMPLAR.f_publicacion = borrow.EJEMPLAR.f_publicacion;

                pRESTAMO.EJEMPLAR.COLECCION = new COLECCION_A_GC_TC();
                pRESTAMO.EJEMPLAR.COLECCION.id_Coleccion = borrow.EJEMPLAR.COLECCION.id_Coleccion;
                pRESTAMO.EJEMPLAR.COLECCION.nombre = borrow.EJEMPLAR.COLECCION.nombre;

                pRESTAMO.EJEMPLAR.COLECCION.AREA = new AREA_PA_U_TA();
                pRESTAMO.EJEMPLAR.COLECCION.AREA.id_Area = borrow.EJEMPLAR.COLECCION.AREA.id_Area;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.nombre = borrow.EJEMPLAR.COLECCION.AREA.nombre;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.descripcion = borrow.EJEMPLAR.COLECCION.AREA.descripcion;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.PISOAREA = borrow.EJEMPLAR.COLECCION.AREA.PISOAREA;

                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO = new USUARIO_rU();
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.id_Usuario = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.id_Usuario;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.nombre = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.nombre;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.email = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.email;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.telefono = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.telefono;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.ocupacion = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.ocupacion;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.direccion = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.direccion;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.fotografia = Encoding.UTF8.GetString(borrow.EJEMPLAR.COLECCION.AREA.USUARIO.fotografia);
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.institucion = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.institucion;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.ROLUSUARIO = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.ROLUSUARIO;

                pRESTAMO.EJEMPLAR.COLECCION.AREA.TIPOAREA = borrow.EJEMPLAR.COLECCION.AREA.TIPOAREA;

                pRESTAMO.EJEMPLAR.COLECCION.GENEROCOLECCION = borrow.EJEMPLAR.COLECCION.GENEROCOLECCION;
                pRESTAMO.EJEMPLAR.COLECCION.TIPOCOLECCION = borrow.EJEMPLAR.COLECCION.TIPOCOLECCION;
                borrowsList.Add(pRESTAMO);
            }
            return borrowsList.AsQueryable();
        }

        // GET: api/PRESTAMO?id_Usuario=00000001
        public IQueryable<PRESTAMO_E> GetPRESTAMO(string id_Usuario)
        {
            System.Console.WriteLine(id_Usuario);
            var borrows = db.PRESTAMO.Where(x => x.id_usuarioPresta == id_Usuario).ToList();
            List<PRESTAMO_E> borrowsList = new List<PRESTAMO_E>();
            foreach (var borrow in borrows)
            {
                PRESTAMO_E pRESTAMO = new PRESTAMO_E();
                pRESTAMO.id_Prestamo = borrow.id_Prestamo;
                pRESTAMO.fh_Prestamo = borrow.fh_Prestamo;
                pRESTAMO.fh_Devolucion = borrow.fh_Devolucion;
                pRESTAMO.ESTADOS = borrow.ESTADOS;

                pRESTAMO.USUARIO = new USUARIO_rU();
                pRESTAMO.USUARIO.id_Usuario = borrow.USUARIO.id_Usuario;
                pRESTAMO.USUARIO.nombre = borrow.USUARIO.nombre;
                pRESTAMO.USUARIO.email = borrow.USUARIO.email;
                pRESTAMO.USUARIO.telefono = borrow.USUARIO.telefono;
                pRESTAMO.USUARIO.ocupacion = borrow.USUARIO.ocupacion;
                pRESTAMO.USUARIO.direccion = borrow.USUARIO.direccion;
                pRESTAMO.USUARIO.fotografia = Encoding.UTF8.GetString(borrow.USUARIO.fotografia);
                pRESTAMO.USUARIO.institucion = borrow.USUARIO.institucion;
                pRESTAMO.USUARIO.ROLUSUARIO = borrow.USUARIO.ROLUSUARIO;

                pRESTAMO.EJEMPLAR = new EJEMPLAR_E_F_I_C();
                pRESTAMO.EJEMPLAR.id_Ejemplar = borrow.EJEMPLAR.id_Ejemplar;
                pRESTAMO.EJEMPLAR.nombre = borrow.EJEMPLAR.nombre;
                pRESTAMO.EJEMPLAR.imagen = Encoding.UTF8.GetString(borrow.EJEMPLAR.imagen);
                pRESTAMO.EJEMPLAR.EDITORIAL = borrow.EJEMPLAR.EDITORIAL;
                pRESTAMO.EJEMPLAR.FORMATOEJEMPLAR = borrow.EJEMPLAR.FORMATOEJEMPLAR;
                pRESTAMO.EJEMPLAR.IDIOMAEJEMPLAR = borrow.EJEMPLAR.IDIOMAEJEMPLAR;
                pRESTAMO.EJEMPLAR.f_publicacion = borrow.EJEMPLAR.f_publicacion;

                pRESTAMO.EJEMPLAR.COLECCION = new COLECCION_A_GC_TC();
                pRESTAMO.EJEMPLAR.COLECCION.id_Coleccion = borrow.EJEMPLAR.COLECCION.id_Coleccion;
                pRESTAMO.EJEMPLAR.COLECCION.nombre = borrow.EJEMPLAR.COLECCION.nombre;

                pRESTAMO.EJEMPLAR.COLECCION.AREA = new AREA_PA_U_TA();
                pRESTAMO.EJEMPLAR.COLECCION.AREA.id_Area = borrow.EJEMPLAR.COLECCION.AREA.id_Area;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.nombre = borrow.EJEMPLAR.COLECCION.AREA.nombre;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.descripcion = borrow.EJEMPLAR.COLECCION.AREA.descripcion;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.PISOAREA = borrow.EJEMPLAR.COLECCION.AREA.PISOAREA;

                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO = new USUARIO_rU();
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.id_Usuario = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.id_Usuario;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.nombre = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.nombre;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.email = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.email;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.telefono = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.telefono;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.ocupacion = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.ocupacion;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.direccion = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.direccion;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.fotografia = Encoding.UTF8.GetString(borrow.EJEMPLAR.COLECCION.AREA.USUARIO.fotografia);
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.institucion = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.institucion;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.ROLUSUARIO = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.ROLUSUARIO;

                pRESTAMO.EJEMPLAR.COLECCION.AREA.TIPOAREA = borrow.EJEMPLAR.COLECCION.AREA.TIPOAREA;

                pRESTAMO.EJEMPLAR.COLECCION.GENEROCOLECCION = borrow.EJEMPLAR.COLECCION.GENEROCOLECCION;
                pRESTAMO.EJEMPLAR.COLECCION.TIPOCOLECCION = borrow.EJEMPLAR.COLECCION.TIPOCOLECCION;
                borrowsList.Add(pRESTAMO);
            }
            return borrowsList.AsQueryable();
        }

        [ResponseType(typeof(COLECCION_PAGINADOR))]
        // GET: api/PRESTAMO?limit=5&page=1&search=test&sortby=col:ASC
        public async Task<IHttpActionResult> GetPRESTAMO(int limit, int page, string search, string SortBy)
        {
            var sorted = "id_Prestamo ascending";
            if (SortBy != null)
            {
                string[] sortby = SortBy.Split(':');
                sorted = sortby[0] + " " + (sortby[1].Equals("ASC") ? "ascending" : "descending");
            }

            int total = db.PRESTAMO
               .Where(x =>
                   DbFunctions.Like(DbFunctions.TruncateTime(x.fh_Prestamo).ToString(), "%" + search + "%") ||
                   DbFunctions.Like(DbFunctions.TruncateTime(x.fh_Devolucion).ToString(), "%" + search + "%") ||
                   DbFunctions.Like(x.ESTADOS.estado, "%" + search + "%") ||
                   DbFunctions.Like(x.USUARIO.nombre, "%" + search + "%") ||
                   DbFunctions.Like(x.EJEMPLAR.nombre, "%" + search + "%"))
               .OrderBy(sorted).Count();

            PRESTAMO_PAGINADOR PAGINADOR = new PRESTAMO_PAGINADOR();
            PAGINADOR.meta = new Meta();
            PAGINADOR.meta.totalItems = total;
            PAGINADOR.meta.itemsPerPage = limit;
            Double totalPages = (total + limit - 1) / limit;
            PAGINADOR.meta.totalPages = (int)Math.Round(totalPages);
            PAGINADOR.meta.currentPage = page > PAGINADOR.meta.totalPages ? 1 : page;
            PAGINADOR.data = new List<PRESTAMO_E>();

            var borrows = db.PRESTAMO
                .Where(x =>
                    DbFunctions.Like(DbFunctions.TruncateTime(x.fh_Prestamo).ToString(), "%" + search + "%") ||
                    DbFunctions.Like(DbFunctions.TruncateTime(x.fh_Devolucion).ToString(), "%" + search + "%") ||
                    DbFunctions.Like(x.ESTADOS.estado, "%" + search + "%") ||
                    DbFunctions.Like(x.USUARIO.nombre, "%" + search + "%") ||
                    DbFunctions.Like(x.EJEMPLAR.nombre, "%" + search + "%"))
                .OrderBy(sorted).Skip((PAGINADOR.meta.currentPage - 1) * limit).Take(limit).ToList();

            foreach (var borrow in borrows)
            {
                PRESTAMO_E pRESTAMO = new PRESTAMO_E();
                pRESTAMO.id_Prestamo = borrow.id_Prestamo;
                pRESTAMO.fh_Prestamo = borrow.fh_Prestamo;
                pRESTAMO.fh_Devolucion = borrow.fh_Devolucion;
                pRESTAMO.ESTADOS = borrow.ESTADOS;

                pRESTAMO.USUARIO = new USUARIO_rU();
                pRESTAMO.USUARIO.id_Usuario = borrow.USUARIO.id_Usuario;
                pRESTAMO.USUARIO.nombre = borrow.USUARIO.nombre;
                pRESTAMO.USUARIO.email = borrow.USUARIO.email;
                pRESTAMO.USUARIO.telefono = borrow.USUARIO.telefono;
                pRESTAMO.USUARIO.ocupacion = borrow.USUARIO.ocupacion;
                pRESTAMO.USUARIO.direccion = borrow.USUARIO.direccion;
                pRESTAMO.USUARIO.fotografia = Encoding.UTF8.GetString(borrow.USUARIO.fotografia);
                pRESTAMO.USUARIO.institucion = borrow.USUARIO.institucion;
                pRESTAMO.USUARIO.ROLUSUARIO = borrow.USUARIO.ROLUSUARIO;

                pRESTAMO.EJEMPLAR = new EJEMPLAR_E_F_I_C();
                pRESTAMO.EJEMPLAR.id_Ejemplar = borrow.EJEMPLAR.id_Ejemplar;
                pRESTAMO.EJEMPLAR.nombre = borrow.EJEMPLAR.nombre;
                pRESTAMO.EJEMPLAR.imagen = Encoding.UTF8.GetString(borrow.EJEMPLAR.imagen);
                pRESTAMO.EJEMPLAR.EDITORIAL = borrow.EJEMPLAR.EDITORIAL;
                pRESTAMO.EJEMPLAR.FORMATOEJEMPLAR = borrow.EJEMPLAR.FORMATOEJEMPLAR;
                pRESTAMO.EJEMPLAR.IDIOMAEJEMPLAR = borrow.EJEMPLAR.IDIOMAEJEMPLAR;
                pRESTAMO.EJEMPLAR.f_publicacion = borrow.EJEMPLAR.f_publicacion;

                pRESTAMO.EJEMPLAR.COLECCION = new COLECCION_A_GC_TC();
                pRESTAMO.EJEMPLAR.COLECCION.id_Coleccion = borrow.EJEMPLAR.COLECCION.id_Coleccion;
                pRESTAMO.EJEMPLAR.COLECCION.nombre = borrow.EJEMPLAR.COLECCION.nombre;

                pRESTAMO.EJEMPLAR.COLECCION.AREA = new AREA_PA_U_TA();
                pRESTAMO.EJEMPLAR.COLECCION.AREA.id_Area = borrow.EJEMPLAR.COLECCION.AREA.id_Area;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.nombre = borrow.EJEMPLAR.COLECCION.AREA.nombre;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.descripcion = borrow.EJEMPLAR.COLECCION.AREA.descripcion;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.PISOAREA = borrow.EJEMPLAR.COLECCION.AREA.PISOAREA;

                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO = new USUARIO_rU();
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.id_Usuario = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.id_Usuario;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.nombre = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.nombre;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.email = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.email;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.telefono = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.telefono;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.ocupacion = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.ocupacion;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.direccion = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.direccion;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.fotografia = Encoding.UTF8.GetString(borrow.EJEMPLAR.COLECCION.AREA.USUARIO.fotografia);
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.institucion = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.institucion;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.ROLUSUARIO = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.ROLUSUARIO;

                pRESTAMO.EJEMPLAR.COLECCION.AREA.TIPOAREA = borrow.EJEMPLAR.COLECCION.AREA.TIPOAREA;

                pRESTAMO.EJEMPLAR.COLECCION.GENEROCOLECCION = borrow.EJEMPLAR.COLECCION.GENEROCOLECCION;
                pRESTAMO.EJEMPLAR.COLECCION.TIPOCOLECCION = borrow.EJEMPLAR.COLECCION.TIPOCOLECCION;
                PAGINADOR.data.Add(pRESTAMO);
            }

            return Ok(PAGINADOR);
        }

        // GET: api/PRESTAMO/5
        [ResponseType(typeof(PRESTAMO_E))]
        public async Task<IHttpActionResult> GetPRESTAMO(int id)
        {
            var borrow = await db.PRESTAMO.FindAsync(id);
            PRESTAMO_E pRESTAMO = new PRESTAMO_E();

            if (borrow == null)
            {
                return NotFound();
            }
            else
            {
                pRESTAMO.id_Prestamo = id;
                pRESTAMO.fh_Prestamo = borrow.fh_Prestamo;
                pRESTAMO.fh_Devolucion = borrow.fh_Devolucion;
                pRESTAMO.ESTADOS = borrow.ESTADOS;

                pRESTAMO.USUARIO = new USUARIO_rU();
                pRESTAMO.USUARIO.id_Usuario = borrow.USUARIO.id_Usuario;
                pRESTAMO.USUARIO.nombre = borrow.USUARIO.nombre;
                pRESTAMO.USUARIO.email = borrow.USUARIO.email;
                pRESTAMO.USUARIO.telefono = borrow.USUARIO.telefono;
                pRESTAMO.USUARIO.ocupacion = borrow.USUARIO.ocupacion;
                pRESTAMO.USUARIO.direccion = borrow.USUARIO.direccion;
                pRESTAMO.USUARIO.fotografia = Encoding.UTF8.GetString(borrow.USUARIO.fotografia);
                pRESTAMO.USUARIO.institucion = borrow.USUARIO.institucion;
                pRESTAMO.USUARIO.ROLUSUARIO = borrow.USUARIO.ROLUSUARIO;

                pRESTAMO.EJEMPLAR = new EJEMPLAR_E_F_I_C();
                pRESTAMO.EJEMPLAR.id_Ejemplar = borrow.EJEMPLAR.id_Ejemplar;
                pRESTAMO.EJEMPLAR.nombre = borrow.EJEMPLAR.nombre;
                pRESTAMO.EJEMPLAR.imagen = Encoding.UTF8.GetString(borrow.EJEMPLAR.imagen);
                pRESTAMO.EJEMPLAR.EDITORIAL = borrow.EJEMPLAR.EDITORIAL;
                pRESTAMO.EJEMPLAR.FORMATOEJEMPLAR = borrow.EJEMPLAR.FORMATOEJEMPLAR;
                pRESTAMO.EJEMPLAR.IDIOMAEJEMPLAR = borrow.EJEMPLAR.IDIOMAEJEMPLAR;
                pRESTAMO.EJEMPLAR.f_publicacion = borrow.EJEMPLAR.f_publicacion;

                pRESTAMO.EJEMPLAR.COLECCION = new COLECCION_A_GC_TC();
                pRESTAMO.EJEMPLAR.COLECCION.id_Coleccion = borrow.EJEMPLAR.COLECCION.id_Coleccion;
                pRESTAMO.EJEMPLAR.COLECCION.nombre = borrow.EJEMPLAR.COLECCION.nombre;

                pRESTAMO.EJEMPLAR.COLECCION.AREA = new AREA_PA_U_TA();
                pRESTAMO.EJEMPLAR.COLECCION.AREA.id_Area = borrow.EJEMPLAR.COLECCION.AREA.id_Area;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.nombre = borrow.EJEMPLAR.COLECCION.AREA.nombre;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.descripcion = borrow.EJEMPLAR.COLECCION.AREA.descripcion;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.PISOAREA = borrow.EJEMPLAR.COLECCION.AREA.PISOAREA;

                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO = new USUARIO_rU();
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.id_Usuario = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.id_Usuario;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.nombre = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.nombre;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.email = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.email;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.telefono = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.telefono;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.ocupacion = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.ocupacion;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.direccion = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.direccion;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.fotografia = Encoding.UTF8.GetString(borrow.EJEMPLAR.COLECCION.AREA.USUARIO.fotografia);
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.institucion = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.institucion;
                pRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.ROLUSUARIO = borrow.EJEMPLAR.COLECCION.AREA.USUARIO.ROLUSUARIO;

                pRESTAMO.EJEMPLAR.COLECCION.AREA.TIPOAREA = borrow.EJEMPLAR.COLECCION.AREA.TIPOAREA;

                pRESTAMO.EJEMPLAR.COLECCION.GENEROCOLECCION = borrow.EJEMPLAR.COLECCION.GENEROCOLECCION;
                pRESTAMO.EJEMPLAR.COLECCION.TIPOCOLECCION = borrow.EJEMPLAR.COLECCION.TIPOCOLECCION;
            }

            return Ok(pRESTAMO);
        }

        // GET: api/PRESTAMO/5 Fechas deshabilitadas
        [ResponseType(typeof(List<DateTime>))]
        public IQueryable<DateTime> GetFREE_EJEMPLAR(int id_Ejemplar)
        {
            var borrows = db.PRESTAMO.Where(p => p.id_Ejemplar == id_Ejemplar).Where(p => p.id_Estado == (int)EstadoPrestamo.RESERVADO || p.id_Estado == (int)EstadoPrestamo.EN_PRESTAMO).ToList();
            List<DateTime> disabledDates = new List<DateTime>();

            foreach (var borrow in borrows) {
                while (borrow.fh_Devolucion >= borrow.fh_Prestamo) {
                    disabledDates.Add(borrow.fh_Prestamo);
                    borrow.fh_Prestamo = borrow.fh_Prestamo.AddDays(1);
                }
            }
            return disabledDates.AsQueryable();
        }

        // PUT: api/PRESTAMO/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPRESTAMO(int id, PRESTAMO pRESTAMO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pRESTAMO.id_Prestamo)
            {
                return BadRequest();
            }

            db.Entry(pRESTAMO).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PRESTAMOExists(id))
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

        // POST: api/PRESTAMO
        [ResponseType(typeof(PRESTAMO))]
        public async Task<IHttpActionResult> PostPRESTAMO(PRESTAMO pRESTAMO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PRESTAMO.Add(pRESTAMO);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = pRESTAMO.id_Prestamo }, pRESTAMO);
        }

        // DELETE: api/PRESTAMO/5
        [ResponseType(typeof(PRESTAMO))]
        public async Task<IHttpActionResult> DeletePRESTAMO(int id)
        {
            PRESTAMO pRESTAMO = await db.PRESTAMO.FindAsync(id);
            if (pRESTAMO == null)
            {
                return NotFound();
            }

            db.PRESTAMO.Remove(pRESTAMO);
            await db.SaveChangesAsync();

            return Ok(pRESTAMO);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PRESTAMOExists(int id)
        {
            return db.PRESTAMO.Count(e => e.id_Prestamo == id) > 0;
        }
    }
}