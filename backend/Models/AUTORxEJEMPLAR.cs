namespace backend.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("AUTORxEJEMPLAR")]
    public partial class AUTORxEJEMPLAR
    {
        [Key]
        public int id_autorEjemplar { get; set; }

        public int id_Autor { get; set; }

        public int id_Ejemplar { get; set; }

        public virtual AUTOR AUTOR { get; set; }

        public virtual EJEMPLAR EJEMPLAR { get; set; }
    }
    public partial class AUTORxEJEMPLAR_A_E
    {
        [Key]
        public int id_autorEjemplar { get; set; }

        public virtual AUTOR AUTOR { get; set; }

        public virtual EJEMPLAR_E_F_I_C EJEMPLAR { get; set; }
    }
}
