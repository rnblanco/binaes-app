namespace backend.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("RESERVA")]
    public partial class RESERVA
    {
        [Key]
        public int id_Reserva { get; set; }

        public DateTime fh_Reserva { get; set; }

        public int id_Prestamo { get; set; }

        public virtual PRESTAMO PRESTAMO { get; set; }
    }
}
