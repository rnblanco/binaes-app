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
    public class RESERVAController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/RESERVA
        public IQueryable<RESERVA_P_E> GetRESERVA()
        {
            var bookings = db.RESERVA;
            List<RESERVA_P_E> bookingsList = new List<RESERVA_P_E>();
            foreach (var booking in bookings)
            {
                RESERVA_P_E rESERVA = new RESERVA_P_E();
                rESERVA.id_Reserva = booking.id_Reserva;
                rESERVA.fh_Reserva = booking.fh_Reserva;

                rESERVA.PRESTAMO = new PRESTAMO_E();
                rESERVA.PRESTAMO.id_Prestamo = booking.PRESTAMO.id_Prestamo;
                rESERVA.PRESTAMO.fh_Prestamo = booking.PRESTAMO.fh_Prestamo;
                rESERVA.PRESTAMO.fh_Devolucion = booking.PRESTAMO.fh_Devolucion;
                rESERVA.PRESTAMO.ESTADOS = booking.PRESTAMO.ESTADOS;

                rESERVA.PRESTAMO.EJEMPLAR = new EJEMPLAR_E_F_I_C();
                rESERVA.PRESTAMO.EJEMPLAR.id_Ejemplar = booking.PRESTAMO.EJEMPLAR.id_Ejemplar;
                rESERVA.PRESTAMO.EJEMPLAR.nombre = booking.PRESTAMO.EJEMPLAR.nombre;
                rESERVA.PRESTAMO.EJEMPLAR.imagen = Encoding.UTF8.GetString(booking.PRESTAMO.EJEMPLAR.imagen);
                rESERVA.PRESTAMO.EJEMPLAR.EDITORIAL = booking.PRESTAMO.EJEMPLAR.EDITORIAL;
                rESERVA.PRESTAMO.EJEMPLAR.FORMATOEJEMPLAR = booking.PRESTAMO.EJEMPLAR.FORMATOEJEMPLAR;
                rESERVA.PRESTAMO.EJEMPLAR.IDIOMAEJEMPLAR = booking.PRESTAMO.EJEMPLAR.IDIOMAEJEMPLAR;
                rESERVA.PRESTAMO.EJEMPLAR.f_publicacion = booking.PRESTAMO.EJEMPLAR.f_publicacion;

                rESERVA.PRESTAMO.EJEMPLAR.COLECCION = new COLECCION_A_GC_TC();
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.id_Coleccion = booking.PRESTAMO.EJEMPLAR.COLECCION.id_Coleccion;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.nombre = booking.PRESTAMO.EJEMPLAR.COLECCION.nombre;

                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA = new AREA_PA_U_TA();
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.id_Area = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.id_Area;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.nombre = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.nombre;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.descripcion = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.descripcion;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.PISOAREA = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.PISOAREA;

                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO = new USUARIO_rU();
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.id_Usuario = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.id_Usuario;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.nombre = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.nombre;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.email = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.email;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.telefono = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.telefono;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.ocupacion = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.ocupacion;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.direccion = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.direccion;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.fotografia = Encoding.UTF8.GetString(booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.fotografia);
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.institucion = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.institucion;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.ROLUSUARIO = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.ROLUSUARIO;

                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.TIPOAREA = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.TIPOAREA;

                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.GENEROCOLECCION = booking.PRESTAMO.EJEMPLAR.COLECCION.GENEROCOLECCION;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.TIPOCOLECCION = booking.PRESTAMO.EJEMPLAR.COLECCION.TIPOCOLECCION;

                rESERVA.PRESTAMO.USUARIO = new USUARIO_rU();
                rESERVA.PRESTAMO.USUARIO.id_Usuario = booking.PRESTAMO.USUARIO.id_Usuario;
                rESERVA.PRESTAMO.USUARIO.nombre = booking.PRESTAMO.USUARIO.nombre;
                rESERVA.PRESTAMO.USUARIO.email = booking.PRESTAMO.USUARIO.email;
                rESERVA.PRESTAMO.USUARIO.telefono = booking.PRESTAMO.USUARIO.telefono;
                rESERVA.PRESTAMO.USUARIO.ocupacion = booking.PRESTAMO.USUARIO.ocupacion;
                rESERVA.PRESTAMO.USUARIO.direccion = booking.PRESTAMO.USUARIO.direccion;
                rESERVA.PRESTAMO.USUARIO.fotografia = Encoding.UTF8.GetString(booking.PRESTAMO.USUARIO.fotografia);
                rESERVA.PRESTAMO.USUARIO.institucion = booking.PRESTAMO.USUARIO.institucion;
                rESERVA.PRESTAMO.USUARIO.ROLUSUARIO = booking.PRESTAMO.USUARIO.ROLUSUARIO;

                bookingsList.Add(rESERVA);
            }
            return bookingsList.AsQueryable();
        }

        // GET: api/RESERVA?id_Usuario=00000001
        public IQueryable<RESERVA_P_E> GetRESERVA(string id_Usuario)
        {
            var bookings = db.RESERVA.Where(x => x.PRESTAMO.id_usuarioPresta == id_Usuario).ToList();
            List<RESERVA_P_E> bookingsList = new List<RESERVA_P_E>();
            foreach (var booking in bookings)
            {
                RESERVA_P_E rESERVA = new RESERVA_P_E();
                rESERVA.id_Reserva = booking.id_Reserva;
                rESERVA.fh_Reserva = booking.fh_Reserva;

                rESERVA.PRESTAMO = new PRESTAMO_E();
                rESERVA.PRESTAMO.id_Prestamo = booking.PRESTAMO.id_Prestamo;
                rESERVA.PRESTAMO.fh_Prestamo = booking.PRESTAMO.fh_Prestamo;
                rESERVA.PRESTAMO.fh_Devolucion = booking.PRESTAMO.fh_Devolucion;
                rESERVA.PRESTAMO.ESTADOS = booking.PRESTAMO.ESTADOS;

                rESERVA.PRESTAMO.EJEMPLAR = new EJEMPLAR_E_F_I_C();
                rESERVA.PRESTAMO.EJEMPLAR.id_Ejemplar = booking.PRESTAMO.EJEMPLAR.id_Ejemplar;
                rESERVA.PRESTAMO.EJEMPLAR.nombre = booking.PRESTAMO.EJEMPLAR.nombre;
                rESERVA.PRESTAMO.EJEMPLAR.imagen = Encoding.UTF8.GetString(booking.PRESTAMO.EJEMPLAR.imagen);
                rESERVA.PRESTAMO.EJEMPLAR.EDITORIAL = booking.PRESTAMO.EJEMPLAR.EDITORIAL;
                rESERVA.PRESTAMO.EJEMPLAR.FORMATOEJEMPLAR = booking.PRESTAMO.EJEMPLAR.FORMATOEJEMPLAR;
                rESERVA.PRESTAMO.EJEMPLAR.IDIOMAEJEMPLAR = booking.PRESTAMO.EJEMPLAR.IDIOMAEJEMPLAR;
                rESERVA.PRESTAMO.EJEMPLAR.f_publicacion = booking.PRESTAMO.EJEMPLAR.f_publicacion;

                rESERVA.PRESTAMO.EJEMPLAR.COLECCION = new COLECCION_A_GC_TC();
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.id_Coleccion = booking.PRESTAMO.EJEMPLAR.COLECCION.id_Coleccion;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.nombre = booking.PRESTAMO.EJEMPLAR.COLECCION.nombre;

                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA = new AREA_PA_U_TA();
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.id_Area = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.id_Area;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.nombre = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.nombre;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.descripcion = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.descripcion;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.PISOAREA = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.PISOAREA;

                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO = new USUARIO_rU();
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.id_Usuario = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.id_Usuario;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.nombre = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.nombre;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.email = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.email;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.telefono = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.telefono;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.ocupacion = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.ocupacion;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.direccion = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.direccion;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.fotografia = Encoding.UTF8.GetString(booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.fotografia);
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.institucion = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.institucion;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.ROLUSUARIO = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.ROLUSUARIO;

                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.TIPOAREA = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.TIPOAREA;

                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.GENEROCOLECCION = booking.PRESTAMO.EJEMPLAR.COLECCION.GENEROCOLECCION;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.TIPOCOLECCION = booking.PRESTAMO.EJEMPLAR.COLECCION.TIPOCOLECCION;

                rESERVA.PRESTAMO.USUARIO = new USUARIO_rU();
                rESERVA.PRESTAMO.USUARIO.id_Usuario = booking.PRESTAMO.USUARIO.id_Usuario;
                rESERVA.PRESTAMO.USUARIO.nombre = booking.PRESTAMO.USUARIO.nombre;
                rESERVA.PRESTAMO.USUARIO.email = booking.PRESTAMO.USUARIO.email;
                rESERVA.PRESTAMO.USUARIO.telefono = booking.PRESTAMO.USUARIO.telefono;
                rESERVA.PRESTAMO.USUARIO.ocupacion = booking.PRESTAMO.USUARIO.ocupacion;
                rESERVA.PRESTAMO.USUARIO.direccion = booking.PRESTAMO.USUARIO.direccion;
                rESERVA.PRESTAMO.USUARIO.fotografia = Encoding.UTF8.GetString(booking.PRESTAMO.USUARIO.fotografia);
                rESERVA.PRESTAMO.USUARIO.institucion = booking.PRESTAMO.USUARIO.institucion;
                rESERVA.PRESTAMO.USUARIO.ROLUSUARIO = booking.PRESTAMO.USUARIO.ROLUSUARIO;

                bookingsList.Add(rESERVA);
            }
            return bookingsList.AsQueryable();
        }

        // GET: api/RESERVA?limit=5&page=1&search=test&sortby=col:ASC
        public IQueryable<RESERVA_P_E> GetRESERVA(int limit, int page, string search, string SortBy)
        {
            var sorted = "id_Reserva ascending";
            if (SortBy != null)
            {
                string[] sortby = SortBy.Split(':');
                sorted = sortby[0] + " " + (sortby[1].Equals("ASC") ? "ascending" : "descending");
            }
            var bookings = db.RESERVA
                .Where(x =>
                    DbFunctions.Like(x.PRESTAMO.EJEMPLAR.nombre, "%" + search + "%") ||
                    DbFunctions.Like(DbFunctions.TruncateTime(x.fh_Reserva).ToString(), "%" + search + "%"))
                .OrderBy(sorted).Skip((page - 1) * limit).Take(limit).ToList();
            List<RESERVA_P_E> bookingsList = new List<RESERVA_P_E>();
            foreach (var booking in bookings)
            {
                RESERVA_P_E rESERVA = new RESERVA_P_E();
                rESERVA.id_Reserva = booking.id_Reserva;
                rESERVA.fh_Reserva = booking.fh_Reserva;

                rESERVA.PRESTAMO = new PRESTAMO_E();
                rESERVA.PRESTAMO.id_Prestamo = booking.PRESTAMO.id_Prestamo;
                rESERVA.PRESTAMO.fh_Prestamo = booking.PRESTAMO.fh_Prestamo;
                rESERVA.PRESTAMO.fh_Devolucion = booking.PRESTAMO.fh_Devolucion;
                rESERVA.PRESTAMO.ESTADOS = booking.PRESTAMO.ESTADOS;

                rESERVA.PRESTAMO.EJEMPLAR = new EJEMPLAR_E_F_I_C();
                rESERVA.PRESTAMO.EJEMPLAR.id_Ejemplar = booking.PRESTAMO.EJEMPLAR.id_Ejemplar;
                rESERVA.PRESTAMO.EJEMPLAR.nombre = booking.PRESTAMO.EJEMPLAR.nombre;
                rESERVA.PRESTAMO.EJEMPLAR.imagen = Encoding.UTF8.GetString(booking.PRESTAMO.EJEMPLAR.imagen);
                rESERVA.PRESTAMO.EJEMPLAR.EDITORIAL = booking.PRESTAMO.EJEMPLAR.EDITORIAL;
                rESERVA.PRESTAMO.EJEMPLAR.FORMATOEJEMPLAR = booking.PRESTAMO.EJEMPLAR.FORMATOEJEMPLAR;
                rESERVA.PRESTAMO.EJEMPLAR.IDIOMAEJEMPLAR = booking.PRESTAMO.EJEMPLAR.IDIOMAEJEMPLAR;
                rESERVA.PRESTAMO.EJEMPLAR.f_publicacion = booking.PRESTAMO.EJEMPLAR.f_publicacion;

                rESERVA.PRESTAMO.EJEMPLAR.COLECCION = new COLECCION_A_GC_TC();
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.id_Coleccion = booking.PRESTAMO.EJEMPLAR.COLECCION.id_Coleccion;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.nombre = booking.PRESTAMO.EJEMPLAR.COLECCION.nombre;

                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA = new AREA_PA_U_TA();
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.id_Area = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.id_Area;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.nombre = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.nombre;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.descripcion = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.descripcion;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.PISOAREA = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.PISOAREA;

                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO = new USUARIO_rU();
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.id_Usuario = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.id_Usuario;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.nombre = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.nombre;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.email = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.email;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.telefono = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.telefono;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.ocupacion = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.ocupacion;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.direccion = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.direccion;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.fotografia = Encoding.UTF8.GetString(booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.fotografia);
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.institucion = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.institucion;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.ROLUSUARIO = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.ROLUSUARIO;

                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.TIPOAREA = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.TIPOAREA;

                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.GENEROCOLECCION = booking.PRESTAMO.EJEMPLAR.COLECCION.GENEROCOLECCION;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.TIPOCOLECCION = booking.PRESTAMO.EJEMPLAR.COLECCION.TIPOCOLECCION;

                rESERVA.PRESTAMO.USUARIO = new USUARIO_rU();
                rESERVA.PRESTAMO.USUARIO.id_Usuario = booking.PRESTAMO.USUARIO.id_Usuario;
                rESERVA.PRESTAMO.USUARIO.nombre = booking.PRESTAMO.USUARIO.nombre;
                rESERVA.PRESTAMO.USUARIO.email = booking.PRESTAMO.USUARIO.email;
                rESERVA.PRESTAMO.USUARIO.telefono = booking.PRESTAMO.USUARIO.telefono;
                rESERVA.PRESTAMO.USUARIO.ocupacion = booking.PRESTAMO.USUARIO.ocupacion;
                rESERVA.PRESTAMO.USUARIO.direccion = booking.PRESTAMO.USUARIO.direccion;
                rESERVA.PRESTAMO.USUARIO.fotografia = Encoding.UTF8.GetString(booking.PRESTAMO.USUARIO.fotografia);
                rESERVA.PRESTAMO.USUARIO.institucion = booking.PRESTAMO.USUARIO.institucion;
                rESERVA.PRESTAMO.USUARIO.ROLUSUARIO = booking.PRESTAMO.USUARIO.ROLUSUARIO;

                bookingsList.Add(rESERVA);
            }
            return bookingsList.AsQueryable();
        }

        // GET: api/RESERVA/5
        [ResponseType(typeof(RESERVA_P_E))]
        public async Task<IHttpActionResult> GetRESERVA(int id)
        {
            var booking = await db.RESERVA.FindAsync(id);
            RESERVA_P_E rESERVA = new RESERVA_P_E();
            if (booking == null)
            {
                return NotFound();
            }
            else
            {
                rESERVA.id_Reserva = booking.id_Reserva;
                rESERVA.fh_Reserva = booking.fh_Reserva;

                rESERVA.PRESTAMO = new PRESTAMO_E();
                rESERVA.PRESTAMO.id_Prestamo = booking.PRESTAMO.id_Prestamo;
                rESERVA.PRESTAMO.fh_Prestamo = booking.PRESTAMO.fh_Prestamo;
                rESERVA.PRESTAMO.fh_Devolucion = booking.PRESTAMO.fh_Devolucion;
                rESERVA.PRESTAMO.ESTADOS = booking.PRESTAMO.ESTADOS;

                rESERVA.PRESTAMO.EJEMPLAR = new EJEMPLAR_E_F_I_C();
                rESERVA.PRESTAMO.EJEMPLAR.id_Ejemplar = booking.PRESTAMO.EJEMPLAR.id_Ejemplar;
                rESERVA.PRESTAMO.EJEMPLAR.nombre = booking.PRESTAMO.EJEMPLAR.nombre;
                rESERVA.PRESTAMO.EJEMPLAR.imagen = Encoding.UTF8.GetString(booking.PRESTAMO.EJEMPLAR.imagen);
                rESERVA.PRESTAMO.EJEMPLAR.EDITORIAL = booking.PRESTAMO.EJEMPLAR.EDITORIAL;
                rESERVA.PRESTAMO.EJEMPLAR.FORMATOEJEMPLAR = booking.PRESTAMO.EJEMPLAR.FORMATOEJEMPLAR;
                rESERVA.PRESTAMO.EJEMPLAR.IDIOMAEJEMPLAR = booking.PRESTAMO.EJEMPLAR.IDIOMAEJEMPLAR;
                rESERVA.PRESTAMO.EJEMPLAR.f_publicacion = booking.PRESTAMO.EJEMPLAR.f_publicacion;

                rESERVA.PRESTAMO.EJEMPLAR.COLECCION = new COLECCION_A_GC_TC();
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.id_Coleccion = booking.PRESTAMO.EJEMPLAR.COLECCION.id_Coleccion;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.nombre = booking.PRESTAMO.EJEMPLAR.COLECCION.nombre;

                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA = new AREA_PA_U_TA();
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.id_Area = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.id_Area;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.nombre = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.nombre;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.descripcion = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.descripcion;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.PISOAREA = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.PISOAREA;

                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO = new USUARIO_rU();
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.id_Usuario = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.id_Usuario;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.nombre = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.nombre;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.email = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.email;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.telefono = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.telefono;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.ocupacion = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.ocupacion;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.direccion = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.direccion;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.fotografia = Encoding.UTF8.GetString(booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.fotografia);
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.institucion = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.institucion;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.ROLUSUARIO = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.USUARIO.ROLUSUARIO;

                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.AREA.TIPOAREA = booking.PRESTAMO.EJEMPLAR.COLECCION.AREA.TIPOAREA;

                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.GENEROCOLECCION = booking.PRESTAMO.EJEMPLAR.COLECCION.GENEROCOLECCION;
                rESERVA.PRESTAMO.EJEMPLAR.COLECCION.TIPOCOLECCION = booking.PRESTAMO.EJEMPLAR.COLECCION.TIPOCOLECCION;

                rESERVA.PRESTAMO.USUARIO = new USUARIO_rU();
                rESERVA.PRESTAMO.USUARIO.id_Usuario = booking.PRESTAMO.USUARIO.id_Usuario;
                rESERVA.PRESTAMO.USUARIO.nombre = booking.PRESTAMO.USUARIO.nombre;
                rESERVA.PRESTAMO.USUARIO.email = booking.PRESTAMO.USUARIO.email;
                rESERVA.PRESTAMO.USUARIO.telefono = booking.PRESTAMO.USUARIO.telefono;
                rESERVA.PRESTAMO.USUARIO.ocupacion = booking.PRESTAMO.USUARIO.ocupacion;
                rESERVA.PRESTAMO.USUARIO.direccion = booking.PRESTAMO.USUARIO.direccion;
                rESERVA.PRESTAMO.USUARIO.fotografia = Encoding.UTF8.GetString(booking.PRESTAMO.USUARIO.fotografia);
                rESERVA.PRESTAMO.USUARIO.institucion = booking.PRESTAMO.USUARIO.institucion;
                rESERVA.PRESTAMO.USUARIO.ROLUSUARIO = booking.PRESTAMO.USUARIO.ROLUSUARIO;
            }

            return Ok(rESERVA);
        }

        // PUT: api/RESERVA/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutRESERVA(int id, RESERVA rESERVA)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != rESERVA.id_Reserva)
            {
                return BadRequest();
            }

            db.Entry(rESERVA).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RESERVAExists(id))
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

        // POST: api/RESERVA
        [ResponseType(typeof(RESERVA))]
        public async Task<IHttpActionResult> PostRESERVA(RESERVA rESERVA)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.RESERVA.Add(rESERVA);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = rESERVA.id_Reserva }, rESERVA);
        }

        // DELETE: api/RESERVA/5
        [ResponseType(typeof(RESERVA))]
        public async Task<IHttpActionResult> DeleteRESERVA(int id)
        {
            RESERVA rESERVA = await db.RESERVA.FindAsync(id);
            if (rESERVA == null)
            {
                return NotFound();
            }

            db.RESERVA.Remove(rESERVA);
            await db.SaveChangesAsync();

            return Ok(rESERVA);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RESERVAExists(int id)
        {
            return db.RESERVA.Count(e => e.id_Reserva == id) > 0;
        }
    }
}