namespace backend.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("AREA")]
    public partial class AREA
    {
        [Key]
        public int id_Area { get; set; }

        [Required]
        [StringLength(30)]
        public string nombre { get; set; }

        [Column(TypeName = "text")]
        [Required]
        public string descripcion { get; set; }

        public int id_tipoArea { get; set; }

        [Required]
        [StringLength(8)]
        public string responsable { get; set; }

        public int id_pisoArea { get; set; }

        public virtual PISOAREA PISOAREA { get; set; }

        [ForeignKey("responsable")]
        public virtual USUARIO USUARIO { get; set; }

        public virtual TIPOAREA TIPOAREA { get; set; }
    }

    public partial class AREA_PA_U_TA
    {
        [Key]
        public int id_Area { get; set; }

        [Required]
        [StringLength(30)]
        public string nombre { get; set; }

        [Column(TypeName = "text")]
        [Required]
        public string descripcion { get; set; }

        public virtual PISOAREA PISOAREA { get; set; }

        public virtual USUARIO_rU USUARIO { get; set; }

        public virtual TIPOAREA TIPOAREA { get; set; }
    }
}
