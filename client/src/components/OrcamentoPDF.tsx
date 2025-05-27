// src/components/OrcamentoPDF.tsx
import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// --- SUAS TIPAGENS (Mantenha ou importe) ---
type Cliente = {
  id: number;
  nome: string;
  email: string;
  celular: string;
  tipo_cliente: string;
  documento: string;
  endereco: string;
  cep?: string | null;
};
type Usuario = { id: number; nome: string; email: string; celular: string };
type Item = {
  id: number;
  nome: string;
  marca: string;
  unidade_medida: string;
  quantidade: string;
  preco_unitario: string;
};
type Servico = { id: number; titulo: string; preco: string };
type Orcamento = {
  id: number;
  nome: string;
  status: string;
  data_inicial: string;
  data_validade: string;
  preco_total: string;
  meios_pagamento: string;
  periodo_garantia: string;
  cliente: Cliente;
  usuario: Usuario;
  itens: Item[];
  servicos: Servico[];
  updated_at: string;
};

interface OrcamentoPDFProps {
  orcamento: Orcamento | null;
}

// --- DADOS DA SUA EMPRESA (Ajuste) ---
const SUA_EMPRESA = {
  nome: "TESLA MULTISERVICE LTDA",
  cnpj: "36.555.573/0001-29",
  cep: "29110-100",
  email: "teslamultiservice2021@gmail.com",
  telefone: "+55 (27) 9914-2916",
};

// --- ESTILOS ---
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 40,
    paddingBottom: 60,
    fontFamily: "Helvetica",
    fontSize: 9,
    color: "#333",
  },
  header: {
    /* ... estilos do header ... */ flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: "1pt solid #ccc",
    paddingBottom: 15,
    marginBottom: 20,
  },
  headerColumn: { flexDirection: "column", width: "48%" },
  companyName: { fontSize: 11, fontWeight: "bold", marginBottom: 5 },
  clientName: { fontSize: 10, fontWeight: "bold", marginBottom: 3 },
  osTitle: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "right",
    marginBottom: 10,
  },
  textSmall: { fontSize: 8, marginBottom: 2 },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    borderBottom: "1pt solid #eee",
    paddingBottom: 3,
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginBottom: 10,
  },
  tableRow: { flexDirection: "row", backgroundColor: "#fff" },
  tableRowHeader: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    borderBottomStyle: "solid",
    borderBottomColor: "#bfbfbf",
    borderBottomWidth: 1,
  },
  tableColHeader: {
    padding: 5,
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderRightWidth: 1,
    fontWeight: "bold",
    fontSize: 9,
    textAlign: "center",
  },
  tableCol: {
    padding: 5,
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  tableColDesc: { width: "55%" },
  tableColUnit: { width: "10%", textAlign: "center" },
  tableColQtd: { width: "10%", textAlign: "center" },
  tableColPrice: { width: "12.5%", textAlign: "right" },
  tableColTotal: { width: "12.5%", textAlign: "right" },
  descriptionText: { fontSize: 8, color: "#555", marginLeft: 5 },
  paymentSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    borderTop: "1pt solid #ccc",
    paddingTop: 15,
  },
  paymentColumn: { width: "48%" },
  sectionSubTitle: { fontSize: 10, fontWeight: "bold", marginBottom: 5 },
  footer: {
    position: "absolute",
    bottom: 25,
    left: 40,
    right: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1pt solid #ccc",
    paddingTop: 5,
    fontSize: 7,
    color: "#555",
  },
});

// --- COMPONENTE PDF ---
const OrcamentoPDF: React.FC<OrcamentoPDFProps> = ({ orcamento }) => {
  const dataAtual = new Date().toLocaleDateString();

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {orcamento ? (
          <>
            {/* Cabeçalho */}
            <View style={styles.header}>
              <View style={styles.headerColumn}>
                <Text style={styles.companyName}>{SUA_EMPRESA.nome}</Text>
                <Text style={styles.textSmall}>CNPJ: {SUA_EMPRESA.cnpj}</Text>
                <Text style={styles.textSmall}>CEP: {SUA_EMPRESA.cep}</Text>
                <Text style={styles.textSmall}>{SUA_EMPRESA.email}</Text>
                <Text style={styles.textSmall}>{SUA_EMPRESA.telefone}</Text>
              </View>
              <View style={styles.headerColumn}>
                <Text style={styles.osTitle}>{orcamento.nome}</Text>
                <Text style={styles.clientName}>{orcamento.cliente.nome}</Text>
                <Text style={styles.textSmall}>
                  CNPJ: {orcamento.cliente.documento}
                </Text>
                <Text style={styles.textSmall}>
                  {orcamento.cliente.endereco}
                </Text>
                <Text style={styles.textSmall}>
                  CEP: {orcamento.cliente.cep || "N/A"}
                </Text>
                <Text style={styles.textSmall}>{orcamento.cliente.email}</Text>
                <Text style={styles.textSmall}>
                  {orcamento.cliente.celular}
                </Text>
              </View>
            </View>

            {/* Tabela de Itens e Serviços */}
            <Text style={styles.sectionTitle}>Serviços e Itens</Text>
            <View style={styles.table}>
              <View style={styles.tableRowHeader}>
                <Text style={[styles.tableColHeader, styles.tableColDesc]}>
                  Descrição
                </Text>
                <Text style={[styles.tableColHeader, styles.tableColUnit]}>
                  Un.
                </Text>
                <Text style={[styles.tableColHeader, styles.tableColQtd]}>
                  Qtd.
                </Text>
                <Text style={[styles.tableColHeader, styles.tableColPrice]}>
                  Preço Unit.
                </Text>
                <Text style={[styles.tableColHeader, styles.tableColTotal]}>
                  Preço Total
                </Text>
              </View>
              {orcamento.itens.map((item) => {
                const itemTotal =
                  parseFloat(item.preco_unitario) * parseInt(item.quantidade);
                return (
                  <View key={`item-${item.id}`} style={styles.tableRow}>
                    <View style={[styles.tableCol, styles.tableColDesc]}>
                      <Text>{item.nome}</Text>
                      <Text style={styles.descriptionText}>
                        {item.marca} / {item.unidade_medida}
                      </Text>
                    </View>
                    <Text style={[styles.tableCol, styles.tableColUnit]}>
                      {item.unidade_medida}
                    </Text>
                    <Text style={[styles.tableCol, styles.tableColQtd]}>
                      {item.quantidade}
                    </Text>
                    <Text style={[styles.tableCol, styles.tableColPrice]}>
                      R$ {item.preco_unitario}
                    </Text>
                    <Text style={[styles.tableCol, styles.tableColTotal]}>
                      R$ {itemTotal.toFixed(2)}
                    </Text>
                  </View>
                );
              })}
              {orcamento.servicos.map((servico) => (
                <View key={`servico-${servico.id}`} style={styles.tableRow}>
                  <View style={[styles.tableCol, styles.tableColDesc]}>
                    <Text>{servico.titulo}</Text>
                  </View>
                  <Text style={[styles.tableCol, styles.tableColUnit]}>
                    un.
                  </Text>
                  <Text style={[styles.tableCol, styles.tableColQtd]}>1</Text>
                  <Text style={[styles.tableCol, styles.tableColPrice]}>
                    R$ {servico.preco}
                  </Text>
                  <Text style={[styles.tableCol, styles.tableColTotal]}>
                    R$ {servico.preco}
                  </Text>
                </View>
              ))}
              <View style={[styles.tableRow, { borderBottomWidth: 0 }]}>
                <Text
                  style={[
                    styles.tableCol,
                    styles.tableColDesc,
                    { borderRightWidth: 0, borderBottomWidth: 0 },
                  ]}
                ></Text>
                <Text
                  style={[
                    styles.tableCol,
                    styles.tableColUnit,
                    { borderRightWidth: 0, borderBottomWidth: 0 },
                  ]}
                ></Text>
                <Text
                  style={[
                    styles.tableCol,
                    styles.tableColQtd,
                    { borderRightWidth: 0, borderBottomWidth: 0 },
                  ]}
                ></Text>
                <Text
                  style={[
                    styles.tableCol,
                    styles.tableColPrice,
                    { fontWeight: "bold", borderBottomWidth: 0 },
                  ]}
                >
                  Total
                </Text>
                <Text
                  style={[
                    styles.tableCol,
                    styles.tableColTotal,
                    { fontWeight: "bold", borderBottomWidth: 0 },
                  ]}
                >
                  R$ {orcamento.preco_total}
                </Text>
              </View>
            </View>

            {/* Pagamento e Garantia */}
            <View style={styles.paymentSection}>
              <View style={styles.paymentColumn}>
                <Text style={styles.sectionSubTitle}>Pagamento</Text>
                <Text style={styles.textSmall}>
                  <Text style={{ fontWeight: "bold" }}>Meios:</Text>{" "}
                  {orcamento.meios_pagamento}
                </Text>
                <Text style={styles.textSmall}>
                  <Text style={{ fontWeight: "bold" }}>Condições:</Text> Sinal
                  de 50% e o valor restante após a conclusão.
                </Text>
              </View>
              <View style={styles.paymentColumn}>
                <Text style={styles.sectionSubTitle}>Garantia</Text>
                <Text style={styles.textSmall}>
                  <Text style={{ fontWeight: "bold" }}>Período:</Text>{" "}
                  {orcamento.periodo_garantia}
                </Text>
              </View>
            </View>

            {/* Rodapé */}
            <View style={styles.footer} fixed>
              <Text>{SUA_EMPRESA.nome}</Text>
              <Text>{dataAtual}</Text>
              <Text
                render={({ pageNumber, totalPages }) =>
                  `${orcamento.cliente.nome} | Página ${pageNumber} / ${totalPages}`
                }
              />
            </View>
          </>
        ) : (
          <View>
            <Text>Carregando...</Text>
          </View>
        )}
      </Page>
    </Document>
  );
};

export default OrcamentoPDF;
