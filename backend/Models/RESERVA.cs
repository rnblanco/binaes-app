namespace backend.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("RESERVA")]
    public partial class RESERVA
    {
        [Key]
        public int id_Reserva { get; set; }

        public DateTime fh_Reserva { get; set; }

        public int id_Prestamo { get; set; }

        public virtual PRESTAMO PRESTAMO { get; set; }
    }

    public partial class RESERVA_P_E
    {
        [Key]
        public int id_Reserva { get; set; }

        public DateTime fh_Reserva { get; set; }

        public virtual PRESTAMO_E PRESTAMO { get; set; }
    }
}
