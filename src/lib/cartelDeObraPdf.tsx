import { Document, Page, StyleSheet, Text, View, pdf } from "@react-pdf/renderer";
import type { Medida, Profesional } from "@/content/cartelDeObra";

const CM_TO_PT = 28.3464567;
const BASE_WIDTH_CM = 70;

const pageSizeCmByMedida: Record<Medida, { width: number; height: number }> = {
  "70 x 50": { width: 70, height: 50 },
  "100 x 50": { width: 100, height: 50 },
  "200 x 100": { width: 200, height: 100 },
};

const COLORS = {
  primary: "#e11d2e",
  foreground: "#0a0a0a",
  muted: "#6b6b68",
  border: "#c9c9c6",
};

export type CartelDeObraData = {
  medida: Medida;
  obra: string;
  propietario: string;
  ubicacion: string;
  expediente: string;
  profesionales: Profesional[];
};

function CartelDeObraDocument({
  medida,
  obra,
  propietario,
  ubicacion,
  expediente,
  profesionales,
}: CartelDeObraData) {
  const { width, height } = pageSizeCmByMedida[medida];
  const scale = width / BASE_WIDTH_CM;

  const styles = StyleSheet.create({
    page: {
      paddingHorizontal: 24 * scale,
      paddingVertical: 24 * scale,
      fontFamily: "Helvetica",
      backgroundColor: "#ffffff",
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
      borderBottomWidth: 2,
      borderBottomColor: COLORS.foreground,
      paddingBottom: 10 * scale,
      marginBottom: 18 * scale,
    },
    logo: {
      fontSize: 30 * scale,
      fontFamily: "Helvetica-Bold",
      color: COLORS.primary,
      letterSpacing: 1,
    },
    badge: {
      fontSize: 11 * scale,
      color: COLORS.foreground,
      borderWidth: 1,
      borderColor: COLORS.border,
      borderRadius: 3,
      paddingHorizontal: 8 * scale,
      paddingVertical: 4 * scale,
    },
    fieldRow: {
      flexDirection: "row",
      marginBottom: 8 * scale,
    },
    fieldLabel: {
      fontSize: 12 * scale,
      fontFamily: "Helvetica-Bold",
      color: COLORS.foreground,
    },
    fieldValue: {
      fontSize: 12 * scale,
      color: COLORS.foreground,
      marginLeft: 4 * scale,
    },
    sectionTitle: {
      fontSize: 10 * scale,
      fontFamily: "Helvetica-Bold",
      color: COLORS.foreground,
      textTransform: "uppercase",
      marginTop: 16 * scale,
      marginBottom: 8 * scale,
      borderTopWidth: 1,
      borderTopColor: COLORS.border,
      paddingTop: 12 * scale,
    },
    profesionalCard: {
      borderWidth: 1,
      borderColor: COLORS.border,
      borderRadius: 3,
      padding: 8 * scale,
      marginBottom: 6 * scale,
    },
    profesionalNombre: {
      fontSize: 11 * scale,
      fontFamily: "Helvetica-Bold",
      color: COLORS.foreground,
      marginBottom: 4 * scale,
    },
    profesionalRow: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    profesionalItem: {
      width: "50%",
      fontSize: 9.5 * scale,
      color: COLORS.foreground,
      marginBottom: 3 * scale,
    },
    profesionalTareas: {
      fontSize: 9.5 * scale,
      color: COLORS.foreground,
      marginTop: 2 * scale,
    },
    profesionalItemLabel: {
      color: COLORS.muted,
    },
  });

  const datos: { label: string; value: string }[] = [
    { label: "Obra", value: obra },
    { label: "Propietario", value: propietario },
    { label: "Ubicación", value: ubicacion },
    { label: "Nro. Expediente", value: expediente },
  ];

  const profesionalesCompletos = profesionales.filter(
    (profesional) =>
      profesional.nombre ||
      profesional.cargo ||
      profesional.tareas.length > 0 ||
      profesional.matricula ||
      profesional.categoria,
  );

  return (
    <Document>
      <Page size={[width * CM_TO_PT, height * CM_TO_PT]} style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.logo}>ALTEC</Text>
          <Text style={styles.badge}>{medida} cm</Text>
        </View>

        <View>
          {datos.map(({ label, value }) => (
            <View key={label} style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>{label}: </Text>
              <Text style={styles.fieldValue}>{value || "—"}</Text>
            </View>
          ))}
        </View>

        {profesionalesCompletos.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>Profesionales</Text>
            {profesionalesCompletos.map((profesional, index) => (
              <View key={index} style={styles.profesionalCard}>
                <Text style={styles.profesionalNombre}>{profesional.nombre || "—"}</Text>
                <View style={styles.profesionalRow}>
                  <Text style={styles.profesionalItem}>
                    <Text style={styles.profesionalItemLabel}>Cargo: </Text>
                    {profesional.cargo || "—"}
                  </Text>
                  <Text style={styles.profesionalItem}>
                    <Text style={styles.profesionalItemLabel}>Matrícula: </Text>
                    {profesional.matricula || "—"}
                  </Text>
                  <Text style={styles.profesionalItem}>
                    <Text style={styles.profesionalItemLabel}>Categoría: </Text>
                    {profesional.categoria || "—"}
                  </Text>
                </View>
                <Text style={styles.profesionalTareas}>
                  <Text style={styles.profesionalItemLabel}>Tareas: </Text>
                  {profesional.tareas.length > 0 ? profesional.tareas.join(", ") : "—"}
                </Text>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}

export async function generateCartelDeObraPdfBlob(data: CartelDeObraData): Promise<Blob> {
  return pdf(<CartelDeObraDocument {...data} />).toBlob();
}
