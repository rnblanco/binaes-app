namespace backend.Models
{
    using System;
    using System.Collections.Generic;
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

    public partial class RESERVA_PAGINADOR
    {
            public Meta meta { get; set; }
            public List<RESERVA_P_E> data { get; set; }
    }
}
