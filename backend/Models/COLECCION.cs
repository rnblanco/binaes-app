namespace backend.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("COLECCION")]
    public partial class COLECCION
    {       
        [Key]
        public int id_Coleccion { get; set; }

        [Required]
        [StringLength(50)]
        public string nombre { get; set; }

        public int id_tipoColeccion { get; set; }

        public int id_generoColeccion { get; set; }

        public int id_areaPertenece { get; set; }

        [ForeignKey("id_areaPertenece")]
        public virtual AREA AREA { get; set; }

        public virtual GENEROCOLECCION GENEROCOLECCION { get; set; }

        public virtual TIPOCOLECCION TIPOCOLECCION { get; set; }
    }

    public partial class COLECCION_A_GC_TC
    {
        [Key]
        public int id_Coleccion { get; set; }

        [Required]
        [StringLength(50)]
        public string nombre { get; set; }

        public virtual AREA_PA_U_TA AREA { get; set; }

        public virtual GENEROCOLECCION GENEROCOLECCION { get; set; }

        public virtual TIPOCOLECCION TIPOCOLECCION { get; set; }
    }
}
