namespace backend.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("ETIQUETASxEJEMPLAR")]
    public partial class ETIQUETASxEJEMPLAR
    {
        [Key]
        public int id_etiquetaEjemplar { get; set; }

        public int id_tipoEtiqueta { get; set; }

        public int id_Ejemplar { get; set; }

        public string etiqueta { get; set; }

        public virtual TIPOETIQUETA TIPOETIQUETA { get; set; }

        public virtual EJEMPLAR EJEMPLAR { get; set; }
    }

    public partial class ETIQUETASxEJEMPLAR_TE_E
    {
        [Key]
        public int id_etiquetaEjemplar { get; set; }

        public string etiqueta { get; set; }

        public virtual TIPOETIQUETA TIPOETIQUETA { get; set; }

        public virtual EJEMPLAR_E_F_I_C EJEMPLAR { get; set; }
    }
}
