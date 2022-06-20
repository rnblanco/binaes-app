namespace backend.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("ETIQUETASxEJEMPLAR")]
    public partial class ETIQUETASxEJEMPLAR
    {
        [Key]
        [Column(Order = 0)]
        public int id_etiquetaEjemplar { get; set; }

        [Key]
        [Column(Order = 1)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int id_tipoEtiqueta { get; set; }

        [Key]
        [Column(Order = 2)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int id_Ejemplar { get; set; }
    }
}
