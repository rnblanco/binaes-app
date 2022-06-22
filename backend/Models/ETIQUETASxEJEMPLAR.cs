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
        public int id_etiquetaEjemplar { get; set; }

        public int id_tipoEtiqueta { get; set; }
                
        public int id_Ejemplar { get; set; }
        public virtual TIPOETIQUETA TIPOETIQUETA { get; set; }

        public virtual EJEMPLAR EJEMPLAR { get; set; }
    }
}
