namespace backend.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public partial class VISITAS
    {
        [Key]
        public int id_Visita { get; set; }

        [Required]
        [StringLength(8)]
        public string id_Usuario { get; set; }

        public int id_Area { get; set; }

        public DateTime fh_entrada { get; set; }

        public DateTime? fh_salida { get; set; }

        public virtual AREA AREA { get; set; }

        public virtual USUARIO USUARIO { get; set; }
    }
    public partial class VISITAS_A_U
    {
        [Key]
        public int id_Visita { get; set; }

        public DateTime fh_entrada { get; set; }

        public DateTime? fh_salida { get; set; }

        public virtual AREA_PA_U_TA AREA { get; set; }

        public virtual USUARIO_rU USUARIO { get; set; }
    }

    public partial class VISITA_PAGINADOR
    {
        public Meta meta { get; set; }
        public List<VISITAS_A_U> data { get; set; }
    }
}
