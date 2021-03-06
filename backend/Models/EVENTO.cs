namespace backend.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("EVENTO")]
    public partial class EVENTO
    {
        [Key]
        public int id_Evento { get; set; }

        [Required]
        [StringLength(100)]
        public string titulo { get; set; }

        [Required]
        public byte[] imagen { get; set; }

        public int capacidad { get; set; }

        public int id_areaRealizacion { get; set; }

        public bool aprobado { get; set; }

        public DateTime fh_Inicio { get; set; }

        public DateTime fh_Finalizacion { get; set; }

        [ForeignKey("id_areaRealizacion")]
        public virtual AREA AREA { get; set; }
    }

    public partial class EVENTO_A
    {
        [Key]
        public int id_Evento { get; set; }

        [Required]
        [StringLength(100)]
        public string titulo { get; set; }

        [Required]
        public string imagen { get; set; }

        public int capacidad { get; set; }

        public bool aprobado { get; set; }

        public DateTime fh_Inicio { get; set; }

        public DateTime fh_Finalizacion { get; set; }

        public virtual AREA_PA_U_TA AREA { get; set; }
    }

    public class EVENTO_PAGINADOR
    {
        public Meta meta { get; set; }
        public List<EVENTO_A> data { get; set; }
    }
}
