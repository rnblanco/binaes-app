namespace backend.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("HORARIOxAREA")]
    public partial class HORARIOxAREA
    {
        [Key]
        public int id_Horario { get; set; }

        public TimeSpan horaAbierto { get; set; }

        public TimeSpan horaCierre { get; set; }

        public int id_Area { get; set; }

        public virtual AREA AREA { get; set; }
    }

    public partial class HORARIOxAREA_A
    {
        [Key]
        public int id_Horario { get; set; }

        public TimeSpan horaAbierto { get; set; }

        public TimeSpan horaCierre { get; set; }

        public virtual AREA_PA_U_TA AREA { get; set; }
    }
}
