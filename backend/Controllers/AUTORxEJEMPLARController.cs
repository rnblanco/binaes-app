using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using backend.Models;

namespace backend.Controllers
{
    public class AUTORxEJEMPLARController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/AUTORxEJEMPLAR
        public IQueryable<AUTORxEJEMPLAR_A_E> GetAUTORxEJEMPLAR()
        {
            var autorexemplars = db.AUTORxEJEMPLAR;
            List<AUTORxEJEMPLAR_A_E> autorexemplarsList = new List<AUTORxEJEMPLAR_A_E>();
            foreach(var autorexemplar in autorexemplars)
            {
                AUTORxEJEMPLAR_A_E aUTORxEJEMPLAR_A_E = new AUTORxEJEMPLAR_A_E();
                aUTORxEJEMPLAR_A_E.id_autorEjemplar = autorexemplar.id_autorEjemplar;
                aUTORxEJEMPLAR_A_E.AUTOR = autorexemplar.AUTOR;

                aUTORxEJEMPLAR_A_E.EJEMPLAR = new EJEMPLAR_E_F_I_C();
                aUTORxEJEMPLAR_A_E.EJEMPLAR.id_Ejemplar = autorexemplar.EJEMPLAR.id_Ejemplar;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.nombre = autorexemplar.EJEMPLAR.nombre;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.imagen = autorexemplar.EJEMPLAR.imagen;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.EDITORIAL = autorexemplar.EJEMPLAR.EDITORIAL;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.FORMATOEJEMPLAR = autorexemplar.EJEMPLAR.FORMATOEJEMPLAR;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.IDIOMAEJEMPLAR = autorexemplar.EJEMPLAR.IDIOMAEJEMPLAR;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.f_publicacion = autorexemplar.EJEMPLAR.f_publicacion;

                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION = new COLECCION_A_GC_TC();
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.id_Coleccion = autorexemplar.EJEMPLAR.COLECCION.id_Coleccion;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.nombre = autorexemplar.EJEMPLAR.COLECCION.nombre;

                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA = new AREA_PA_U_TA();
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA.id_Area = autorexemplar.EJEMPLAR.COLECCION.AREA.id_Area;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA.nombre = autorexemplar.EJEMPLAR.COLECCION.AREA.nombre;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA.descripcion = autorexemplar.EJEMPLAR.COLECCION.AREA.descripcion;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA.PISOAREA = autorexemplar.EJEMPLAR.COLECCION.AREA.PISOAREA;

                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA.USUARIO = new USUARIO_rU();
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA.USUARIO.id_Usuario = autorexemplar.EJEMPLAR.COLECCION.AREA.USUARIO.id_Usuario;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA.USUARIO.nombre = autorexemplar.EJEMPLAR.COLECCION.AREA.USUARIO.nombre;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA.USUARIO.email = autorexemplar.EJEMPLAR.COLECCION.AREA.USUARIO.email;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA.USUARIO.telefono = autorexemplar.EJEMPLAR.COLECCION.AREA.USUARIO.telefono;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA.USUARIO.ocupacion = autorexemplar.EJEMPLAR.COLECCION.AREA.USUARIO.ocupacion;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA.USUARIO.direccion = autorexemplar.EJEMPLAR.COLECCION.AREA.USUARIO.direccion;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA.USUARIO.fotografia = autorexemplar.EJEMPLAR.COLECCION.AREA.USUARIO.fotografia;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA.USUARIO.institucion = autorexemplar.EJEMPLAR.COLECCION.AREA.USUARIO.institucion;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA.USUARIO.ROLUSUARIO = autorexemplar.EJEMPLAR.COLECCION.AREA.USUARIO.ROLUSUARIO;

                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA.TIPOAREA = autorexemplar.EJEMPLAR.COLECCION.AREA.TIPOAREA;

                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.GENEROCOLECCION = autorexemplar.EJEMPLAR.COLECCION.GENEROCOLECCION;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.TIPOCOLECCION = autorexemplar.EJEMPLAR.COLECCION.TIPOCOLECCION;

                autorexemplarsList.Add(aUTORxEJEMPLAR_A_E);
            }
            return autorexemplarsList.AsQueryable(); 
        }

        // GET: api/AUTORxEJEMPLAR/5
        [ResponseType(typeof(AUTORxEJEMPLAR_A_E))]
        public async Task<IHttpActionResult> GetAUTORxEJEMPLAR(int id)
        {
            var autorexemplar = await db.AUTORxEJEMPLAR.FindAsync(id);
            AUTORxEJEMPLAR_A_E aUTORxEJEMPLAR_A_E = new AUTORxEJEMPLAR_A_E();
            if (autorexemplar == null)
            {
                return NotFound();
            }
            else
            {
                aUTORxEJEMPLAR_A_E.id_autorEjemplar = autorexemplar.id_autorEjemplar;
                aUTORxEJEMPLAR_A_E.AUTOR = autorexemplar.AUTOR;

                aUTORxEJEMPLAR_A_E.EJEMPLAR = new EJEMPLAR_E_F_I_C();
                aUTORxEJEMPLAR_A_E.EJEMPLAR.id_Ejemplar = autorexemplar.EJEMPLAR.id_Ejemplar;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.nombre = autorexemplar.EJEMPLAR.nombre;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.imagen = autorexemplar.EJEMPLAR.imagen;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.EDITORIAL = autorexemplar.EJEMPLAR.EDITORIAL;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.FORMATOEJEMPLAR = autorexemplar.EJEMPLAR.FORMATOEJEMPLAR;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.IDIOMAEJEMPLAR = autorexemplar.EJEMPLAR.IDIOMAEJEMPLAR;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.f_publicacion = autorexemplar.EJEMPLAR.f_publicacion;

                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION = new COLECCION_A_GC_TC();
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.id_Coleccion = autorexemplar.EJEMPLAR.COLECCION.id_Coleccion;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.nombre = autorexemplar.EJEMPLAR.COLECCION.nombre;

                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA = new AREA_PA_U_TA();
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA.id_Area = autorexemplar.EJEMPLAR.COLECCION.AREA.id_Area;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA.nombre = autorexemplar.EJEMPLAR.COLECCION.AREA.nombre;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA.descripcion = autorexemplar.EJEMPLAR.COLECCION.AREA.descripcion;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA.PISOAREA = autorexemplar.EJEMPLAR.COLECCION.AREA.PISOAREA;

                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA.USUARIO = new USUARIO_rU();
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA.USUARIO.id_Usuario = autorexemplar.EJEMPLAR.COLECCION.AREA.USUARIO.id_Usuario;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA.USUARIO.nombre = autorexemplar.EJEMPLAR.COLECCION.AREA.USUARIO.nombre;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA.USUARIO.email = autorexemplar.EJEMPLAR.COLECCION.AREA.USUARIO.email;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA.USUARIO.telefono = autorexemplar.EJEMPLAR.COLECCION.AREA.USUARIO.telefono;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA.USUARIO.ocupacion = autorexemplar.EJEMPLAR.COLECCION.AREA.USUARIO.ocupacion;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA.USUARIO.direccion = autorexemplar.EJEMPLAR.COLECCION.AREA.USUARIO.direccion;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA.USUARIO.fotografia = autorexemplar.EJEMPLAR.COLECCION.AREA.USUARIO.fotografia;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA.USUARIO.institucion = autorexemplar.EJEMPLAR.COLECCION.AREA.USUARIO.institucion;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA.USUARIO.ROLUSUARIO = autorexemplar.EJEMPLAR.COLECCION.AREA.USUARIO.ROLUSUARIO;

                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.AREA.TIPOAREA = autorexemplar.EJEMPLAR.COLECCION.AREA.TIPOAREA;

                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.GENEROCOLECCION = autorexemplar.EJEMPLAR.COLECCION.GENEROCOLECCION;
                aUTORxEJEMPLAR_A_E.EJEMPLAR.COLECCION.TIPOCOLECCION = autorexemplar.EJEMPLAR.COLECCION.TIPOCOLECCION;
            }

            return Ok(aUTORxEJEMPLAR_A_E);
        }

        // PUT: api/AUTORxEJEMPLAR/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutAUTORxEJEMPLAR(int id, AUTORxEJEMPLAR aUTORxEJEMPLAR)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != aUTORxEJEMPLAR.id_autorEjemplar)
            {
                return BadRequest();
            }

            db.Entry(aUTORxEJEMPLAR).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AUTORxEJEMPLARExists(id))
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

        // POST: api/AUTORxEJEMPLAR
        [ResponseType(typeof(AUTORxEJEMPLAR))]
        public async Task<IHttpActionResult> PostAUTORxEJEMPLAR(AUTORxEJEMPLAR aUTORxEJEMPLAR)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.AUTORxEJEMPLAR.Add(aUTORxEJEMPLAR);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = aUTORxEJEMPLAR.id_autorEjemplar }, aUTORxEJEMPLAR);
        }

        // DELETE: api/AUTORxEJEMPLAR/5
        [ResponseType(typeof(AUTORxEJEMPLAR))]
        public async Task<IHttpActionResult> DeleteAUTORxEJEMPLAR(int id)
        {
            AUTORxEJEMPLAR aUTORxEJEMPLAR = await db.AUTORxEJEMPLAR.FindAsync(id);
            if (aUTORxEJEMPLAR == null)
            {
                return NotFound();
            }

            db.AUTORxEJEMPLAR.Remove(aUTORxEJEMPLAR);
            await db.SaveChangesAsync();

            return Ok(aUTORxEJEMPLAR);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AUTORxEJEMPLARExists(int id)
        {
            return db.AUTORxEJEMPLAR.Count(e => e.id_autorEjemplar == id) > 0;
        }
    }
}