namespace backend.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("P_CLAVExEJEMPLAR")]
    public partial class P_CLAVExEJEMPLAR
    {
        [Key]
        public int id_pClaveEjemplar { get; set; }

        public int id_p_clave { get; set; }

        public int id_Ejemplar { get; set; }

        public virtual P_CLAVE P_CLAVE { get; set; }

        public virtual EJEMPLAR EJEMPLAR { get; set; }
    }

    public partial class P_CLAVExEJEMPLAR_E
    {
        [Key]
        public int id_pClaveEjemplar { get; set; }

        public virtual P_CLAVE P_CLAVE { get; set; }

        public virtual EJEMPLAR_E_F_I_C EJEMPLAR { get; set; }
    }
}
