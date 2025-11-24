import React from 'react';
import GuidePage from '../pages/Guide.jsx';

function GuideMetadataFormatPage() {
  return (
    <GuidePage
      title="How do I format my metadata TSV file correctly?"
      breadcrumbLabel="How do I format my metadata TSV file correctly?"
    >
      {/* Overview */}
      <div className="text-base leading-7 text-zinc-700">
        <h2 className="font-bold text-2xl text-zinc-950 mb-4">Overview</h2>
        <p>
          The Metadata Collection Templates are designed to support the structured, harmonized collection of metadata for five key pathogens across Africa. These templates help ensure that sample-level and subject-level information is captured in a consistent, high-quality format, enabling better comparability, faster analysis, and more efficient public health response.
        </p>
        <p className="mt-4">
          This guide provides instructions on how to correctly use the spreadsheet-based template. It is intended for use by:
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>National and regional public health laboratories</li>
          <li>Research teams generating cholera, klebsiella, mpox, covid and malaria sequence data</li>
          <li>Institutions preparing data for submission to the AGARI platform</li>
        </ul>
        <p className="mt-4">
          This guide will help users ensure that data is valid, complete, and ready for upload to the AGARI platform to support pathogen monitoring and regional collaboration.
        </p>
      </div>

      {/* Template Structure */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Template Structure
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          The spreadsheet template contains several sheets, each with a specific function. Users should not alter the structure of the workbook beyond entering metadata in the appropriate cells of the Metadata sheet.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-zinc-300">
            <thead className="bg-zinc-100">
              <tr>
                <th className="border border-zinc-300 px-4 py-2 text-left text-sm font-semibold text-zinc-900">Sheet Name</th>
                <th className="border border-zinc-300 px-4 py-2 text-left text-sm font-semibold text-zinc-900">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">Instructions</td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">Provides an overview of how to complete the template, including structured format, required and multiselect fields.</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">Entry Sheet</td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">The primary data entry sheet. Each row should represent one isolate because one biological sample, such as blood for malaria, can include different isolates. This is the only sheet users should modify.</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">Picklist</td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">Contains reference lists for dropdown fields. This sheet is locked to maintain standardization.</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">Country/Province picklist</td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">Contains reference lists for country related fields. This sheet is locked to maintain standardization.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-base leading-7 text-zinc-700">
          Each field in the Metadata sheet is based on harmonized metadata standards developed in collaboration with Africa CDC, research partners, and domain experts.
        </p>
      </div>

      {/* Accessing the Template */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Accessing the Template
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          The metadata collection template supports different software environments.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <p className="text-base leading-7 text-zinc-700">
            <strong>Format Recommended:</strong> Excel (.xlsx) - This template works across Microsoft Excel, Google Sheets, and Numbers. For optimal performance, we recommend using Google Sheets.
          </p>
        </div>
      </div>

      {/* How to Navigate the Template */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          How to Navigate the Template
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          When you open the template, you will see several sheets (tabs) at the bottom of your spreadsheet window:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li><strong>Sheet 1 – Instruction Notes:</strong> A brief overview of how to use the template.</li>
          <li><strong>Sheet 2 – Entry Sheet:</strong> Where you will enter all your sample/isolate information.</li>
          <li><strong>Sheet 3 – Reference data (Picklist):</strong> Controlled vocabulary and ontology list for dropdown fields.</li>
          <li><strong>Sheet 4 – Reference data (country / geo_loc_name_countries / geo_loc_name_state_province_territories):</strong> Controlled vocabulary list for countries and their associated states/provinces/territories.</li>
        </ul>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
          <p className="text-base leading-7 text-zinc-700">
            <strong>Important:</strong> Do not attempt to modify these sheets, as they contain reference data and formulas essential for the template to function correctly.
          </p>
        </div>
        
        <div className="mt-4">
          <img src="/src/assets/metadata_guide_images/page02_img1.png" alt="Template sheet tabs" className="max-w-full h-auto border border-zinc-300 rounded shadow-sm" />
        </div>
      </div>

      {/* Understanding the Entry Sheet Layout */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Understanding the Entry Sheet Layout
        </h2>
        
        <h3 className="font-semibold text-xl text-zinc-950">
          1. Row 1 – Metadata/Fields Terms
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>Column headers indicate the specific field, e.g., sample collection date, subject age, and serotype</li>
          <li><strong>Mandatory fields are highlighted in yellow</strong> – these must be filled in for every entry.</li>
          <li>All white fields are optional. These fields are not required for submission, but they are important for adding valuable information.</li>
        </ul>

        <div className="mt-4">
          <img src="/src/assets/metadata_guide_images/page03_img1.png" alt="Mandatory fields highlighted in yellow" className="max-w-full h-auto border border-zinc-300 rounded shadow-sm" />
        </div>

        <h3 className="font-semibold text-xl text-zinc-950 mt-4">
          2. Row 2 and Onwards – Your Data
        </h3>
        <p className="text-base leading-7 text-zinc-700">
          Each row represents one sample or isolate. Enter one record per row.
        </p>
      </div>

      {/* Types of Variables in the Entry Sheet */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Types of Variables in the Entry Sheet
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-zinc-300">
            <thead className="bg-zinc-100">
              <tr>
                <th className="border border-zinc-300 px-4 py-2 text-left text-sm font-semibold text-zinc-900">Field Type</th>
                <th className="border border-zinc-300 px-4 py-2 text-left text-sm font-semibold text-zinc-900">How to Enter Data</th>
                <th className="border border-zinc-300 px-4 py-2 text-left text-sm font-semibold text-zinc-900">Validation Rule</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700">Free-text field</td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">Type manually or paste values.</td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">Values must be text</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700">Number fields</td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">Type manually or paste values.</td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">Values must be Integers</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700">Date fields</td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">Enter dates as YYYY-MM-DD (full date)</td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">All date fields must have a valid entry in the format: YYYY-MM-DD (for example, 2022-10-15). Letters not accepted; year only is invalid</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700">Dropdown (single-select)</td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">Choose from the provided picklist.</td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">Controlled picklist</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700">Multi-select fields</td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">Type in one or more than one option if applicable. Refer to the column header cell note for guidance on where to find the list of values. The field cells have a green background color.</td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">Use comma as separator. Ensure the values typed match exactly as listed.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4">
          <p className="text-sm font-semibold text-zinc-700 mb-2">Example: Dropdown (single-select) field</p>
          <img src="/src/assets/metadata_guide_images/page04_img1.png" alt="Dropdown field example" className="max-w-full h-auto border border-zinc-300 rounded shadow-sm" />
        </div>
      </div>

      {/* Data Entry Tips */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Data Entry Tips
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>Always start by filling in the mandatory (yellow background cells) fields</li>
          <li>Use the dropdown (picklist) whenever possible to maintain consistency.</li>
          <li>Avoid using extra spaces or special characters unless explicitly required.</li>
          <li>For multi-select fields, follow the exact separation method given in the instructions tab (e.g., comma)</li>
          <li>For picklist values, ensure that there are no whitespace in between the value selected</li>
          <li>If you paste data from another sheet, double-check that the formatting is preserved.</li>
        </ul>
        <div className="mt-4">
          <img src="/src/assets/metadata_guide_images/page05_img1.png" alt="Data entry tips visual guide" className="max-w-full h-auto border border-zinc-300 rounded shadow-sm" />
        </div>
      </div>

      {/* Instructions Tab - Quick Reference */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Instructions Tab – Quick Reference
        </h2>

        <h3 className="font-semibold text-xl text-zinc-950">1. Purpose of Template</h3>
        <p className="text-base leading-7 text-zinc-700">
          This template standardizes the collection of metadata for submission to the Agari database.
        </p>

        <h3 className="font-semibold text-xl text-zinc-950">2. How to Use This Template</h3>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>Work only in the 'Entry' sheet.</li>
          <li>Read the 'Instruction Notes' for detailed guidance on how to fill in the template.</li>
          <li>Do not edit the other sheets – these contain reference lists and formulas.</li>
          <li>Fill in all required and mandatory fields.</li>
          <li>Use the specific date format: YYYY-MM-DD.</li>
          <li>Use the dropdown list where provided. If the desired value is not available, enter it in the adjacent column next to the dropdown list with the prefix 'Other' if provided.</li>
          <li>For multi-select fields, always refer to the user guide for the complete list of allowed values. Multiselect fields have the green background colour with a cell note on correct data expected. Ensure the values typed in match exactly as shown in the list — including capitalization, punctuation, and slashes.</li>
        </ul>

        <h3 className="font-semibold text-xl text-zinc-950 mt-4">3. Variable Types and Formatting Rules</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-zinc-300">
            <thead className="bg-zinc-100">
              <tr>
                <th className="border border-zinc-300 px-4 py-2 text-left text-sm font-semibold text-zinc-900">Field Type</th>
                <th className="border border-zinc-300 px-4 py-2 text-left text-sm font-semibold text-zinc-900">How to Enter Data</th>
                <th className="border border-zinc-300 px-4 py-2 text-left text-sm font-semibold text-zinc-900">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">Free-text</td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">Type in plain text, follow format guidelines</td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">VC-UG-20240716-080</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">Numeric</td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">Only numbers, no text or symbols</td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">12</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">Date</td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">YYYY-MM-DD</td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">2021-02-25</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">Dropdown</td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">Select from the dropdown list</td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">South Africa</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">Multi-select</td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">Type one or more items exactly as shown in the guides with each item separated by commas and no spaces.</td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">IncA,pSDH-1,pVC</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-semibold text-xl text-zinc-950 mt-4">4. Required Fields</h3>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>All mandatory fields must have a value entered. The column headers are highlighted in yellow.</li>
          <li>All Date fields must have a value with the format valid entry format - YYYY-MM-DD.</li>
          <li>All picklist fields must have a value selected from the available list. Entries cannot be left blank or typed manually.</li>
          <li>Missing required fields will cause errors during upload.</li>
        </ul>

        <h3 className="font-semibold text-xl text-zinc-950 mt-4">5. Common Validation Rules</h3>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>No future dates allowed</li>
          <li>Certain fields cannot precede others, e.g., 'sample collection date' cannot be after 'sample receive date'.</li>
        </ul>
      </div>

      {/* Mandatory and Multi-Select Fields by Pathogen */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Mandatory and Multi-Select Fields by Pathogen
        </h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border border-zinc-300 text-sm">
            <thead className="bg-zinc-100">
              <tr>
                <th className="border border-zinc-300 px-4 py-2 text-left text-sm font-semibold text-zinc-900">Pathogen</th>
                <th className="border border-zinc-300 px-4 py-2 text-left text-sm font-semibold text-zinc-900">Mandatory Fields</th>
                <th className="border border-zinc-300 px-4 py-2 text-left text-sm font-semibold text-zinc-900">Multi-Select Fields</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700">Cholera</td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">
                  study_id, isolate_id, geo_loc_name_country, geo_loc_name_state_province_territory, specimen_collector_sample_id, sample_collection_date, specimen source material category, biospecimen
                </td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">
                  plasmid_identified, resistance_genes, virulence_factor_genes
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700">Klebsiella</td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">
                  study_id, specimen_collector_sample_id, isolate_id, geo_loc_name_country, geo_loc_name_state_province_territory, sample_collection_date, specimen source material category, biospecimen
                </td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">
                  antimicrobial_resistant_plasmid_type, resistance_genes, virulence_factor_genes
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700">Mpox</td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">
                  specimen_collector_sample_id, sample_collected_by, purpose_of_sampling, geo_loc_name_country, geo_loc_name_state_province_territory, sample_collection_date, organism, isolate_id, host_scientific_name, host_disease, sequenced_by, purpose_of_sequencing, sequencing_instrument
                </td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">
                  signs and symptoms, pre-existing conditions and risk factors, complications, prior Mpox treatment agent
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700">Covid</td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">
                  specimen_collector_sample_id, sample_collected_by, geo_loc_name_country, geo_loc_name_state_province_territory, sample_collection_date, organism, isolate_id, host_scientific_name, host_disease, sequenced_by, purpose_of_sequencing, sequencing_instrument
                </td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">
                  -
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700">Malaria Human</td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">
                  specimen_collector_sample_id, sample_collected_by, geo_loc_name_country, geo_loc_name_state_province_territory, sample_collection_date, organism, isolate_id, host_scientific_name, host_disease, sequenced_by, purpose_of_sequencing, sequencing_instrument
                </td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">
                  diagnostic_procedure_of_malaria, phenotype, diagnostic_resistance_type, antimalarials, prior_antimalarial_treatment_agent, resistance_gene_symbol, resistance_variant
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700">Malaria Vector</td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">
                  specimen_collector_sample_id, specimen_collector_sample_id, sample_collected_by, geo_loc_name_country, geo_loc_name_state_province_territory, sample_collection_date, organism, isolate_id, second_host_scientific_name, sequenced_by, purpose_of_sequencing, sequencing_instrument
                </td>
                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">
                  insecticide_class, insecticide, breeding_habitat, detection_of_parasite_procedure, specimen_processing, attribute_of_vector, resistance_gene_symbol, resistance_variant
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Exporting Your Data as a TSV File */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Exporting Your Data as a TSV File
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          Once you have completed filling in the Metadata sheet, you will need to export your data as a Tab-Separated Values (TSV) file for upload to the AGARI system. TSV format ensures data integrity and compatibility with the system's import requirements.
        </p>

        <h3 className="font-semibold text-xl text-zinc-950">What is a TSV File?</h3>
        <p className="text-base leading-7 text-zinc-700">
          A TSV (Tab-Separated Values) file is a plain text format where each field is separated by a tab character. Unlike CSV files that use commas, TSV files use tabs as delimiters, which prevents issues when your data contains commas within field values.
        </p>

        <h3 className="font-semibold text-xl text-zinc-950 mt-6">Step-by-Step Export Instructions for Excel</h3>
        
        <ol className="list-decimal pl-6 space-y-3 text-base leading-7 text-zinc-700">
          <li>Click on the Entry sheet tab to ensure you are on the correct sheet.</li>
          <li>Click on <strong>File</strong> in the top menu, then select <strong>Export</strong>.</li>
        </ol>

        <div className="mt-4">
          <img src="/src/assets/metadata_guide_images/page10_img1.png" alt="Excel File menu - Export option" className="max-w-full h-auto border border-zinc-300 rounded shadow-sm" />
        </div>

        <ol start="3" className="list-decimal pl-6 space-y-3 text-base leading-7 text-zinc-700 mt-4">
          <li>Click on <strong>Change File Type</strong>, then under <strong>Other File Types</strong>, Click on <strong>Text (Tab delimited)</strong>.</li>
          <li>Click on <strong>Save As</strong> button.</li>
        </ol>

        <div className="mt-4 space-y-2">
          <img src="/src/assets/metadata_guide_images/page11_img1.png" alt="Excel Change File Type dialog" className="max-w-full h-auto border border-zinc-300 rounded shadow-sm" />
          <img src="/src/assets/metadata_guide_images/page11_img2.png" alt="Excel Text Tab delimited option" className="max-w-full h-auto border border-zinc-300 rounded shadow-sm" />
        </div>

        <ol start="5" className="list-decimal pl-6 space-y-3 text-base leading-7 text-zinc-700 mt-4">
          <li>Choose the location where you want to save the file.</li>
          <li>In the <strong>Save as type</strong> dropdown menu, scroll down and select <strong>Text (Tab delimited) (*.txt)</strong>.
            <br /><em className="text-sm">Note: Excel may show this option as "Text (Tab delimited)" or "Tab Delimited Text" depending on your Excel version.</em>
          </li>
          <li>Rename the file if needed. Give it a descriptive name that includes your institution code and date (e.g., NICD_Cholera_Metadata_2024-11-10).</li>
          <li>Click <strong>Save</strong>.</li>
        </ol>

        <div className="mt-4 space-y-2">
          <img src="/src/assets/metadata_guide_images/page12_img1.png" alt="Excel Save As dialog with Text Tab delimited selected" className="max-w-full h-auto border border-zinc-300 rounded shadow-sm" />
        </div>

        <ol start="9" className="list-decimal pl-6 space-y-3 text-base leading-7 text-zinc-700 mt-4">
          <li>Excel may display a warning message that says the selected file type does not support workbooks with multiple sheets. Click <strong>OK</strong> or <strong>Yes</strong> to continue. Only the active sheet (Entry Sheet) will be saved.</li>
        </ol>

        <div className="mt-4">
          <img src="/src/assets/metadata_guide_images/page13_img1a.png" alt="Excel warning: save only active sheet" className="max-w-full h-auto border border-zinc-300 rounded shadow-sm" />
        </div>

        <div className="mt-4">
          <img src="/src/assets/metadata_guide_images/page12_img2a.png" alt="Excel warning: keep using Text Tab delimited format" className="max-w-full h-auto border border-zinc-300 rounded shadow-sm" />
        </div>

        <ol start="10" className="list-decimal pl-6 space-y-3 text-base leading-7 text-zinc-700 mt-4">
          <li>After saving, Navigate to the file location on the File Explorer.</li>
          <li>Open the File with <strong>Notepad</strong> text editor (default text editor for windows).</li>
        </ol>

        <div className="mt-4">
          <img src="/src/assets/metadata_guide_images/page13_img2.png" alt="Open file with Notepad" className="max-w-full h-auto border border-zinc-300 rounded shadow-sm" />
        </div>

        <ol start="12" className="list-decimal pl-6 space-y-3 text-base leading-7 text-zinc-700 mt-4">
          <li>Click on <strong>File</strong> in the top menu, then select <strong>Save As</strong>.</li>
        </ol>

        <div className="mt-4 space-y-2">
          <img src="/src/assets/metadata_guide_images/page14_img1.png" alt="Notepad File menu - Save As" className="max-w-full h-auto border border-zinc-300 rounded shadow-sm" />
          <img src="/src/assets/metadata_guide_images/page14_img2.png" alt="Notepad Save As dialog" className="max-w-full h-auto border border-zinc-300 rounded shadow-sm" />
        </div>

        <ol start="13" className="list-decimal pl-6 space-y-3 text-base leading-7 text-zinc-700 mt-4">
          <li>Choose the location where you want to save the file.</li>
          <li>You can either change the filename but ensure you add the file extension <strong>.tsv</strong> to the filename.</li>
          <li>Click <strong>Save</strong>.</li>
          <li>Check the saved file extension to confirm the type property is tsv.</li>
        </ol>

        <h3 className="font-semibold text-xl text-zinc-950 mt-6">Step-by-Step Export Instructions for Google Sheets</h3>
        
        <ol className="list-decimal pl-6 space-y-3 text-base leading-7 text-zinc-700">
          <li>Click on the Entry sheet tab to ensure you are on the correct sheet.</li>
          <li>Click on <strong>File</strong> in the top menu, then click <strong>Download</strong>.</li>
          <li>Click on <strong>Tab-separated values (.tsv)</strong> from the list of file types.</li>
          <li>The file gets saved to your browser default download location.</li>
        </ol>

        <h3 className="font-semibold text-xl text-zinc-950 mt-6">Step-by-Step Export Instructions for Numbers</h3>
        
        <ol className="list-decimal pl-6 space-y-3 text-base leading-7 text-zinc-700">
          <li>Click on the Entry sheet tab to ensure you are on the correct sheet.</li>
          <li>Click on <strong>File</strong> in the top menu, then click <strong>Export to</strong>.</li>
          <li>Click on <strong>tsv</strong> from the list of file types.</li>
          <li>Click on <strong>Save</strong>.</li>
          <li>Choose the location where you want to save the file.</li>
          <li>Click on <strong>Export</strong>.</li>
        </ol>

        <h3 className="font-semibold text-xl text-zinc-950 mt-6">Important Notes</h3>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li><strong>Save only the Entry sheet:</strong> The TSV export will only save the currently active sheet. Make sure you are on the Metadata sheet before exporting.</li>
          <li><strong>Keep your original Excel file:</strong> Always keep a copy of your original .xlsx template file with all sheets intact. The TSV file is only for uploading to AGARI.</li>
          <li><strong>Do not open TSV files in Excel for editing:</strong> If you need to make changes after exporting, edit the original Excel file and export again. Opening TSV files in Excel can cause formatting issues.</li>
          <li><strong>File size:</strong> TSV files are typically smaller than Excel files. If your file seems unusually large, verify that only the Metadata sheet was exported.</li>
        </ul>
      </div>

      {/* Multi-Select Field Values by Pathogen - Detailed */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Multi-Select Field Values by Pathogen
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          Below are the complete lists of allowed values for multi-select fields for each pathogen. Remember to separate multiple values with commas (no spaces).
        </p>

        {/* Cholera */}
        <div className="mt-6">
          <h3 className="font-semibold text-xl text-zinc-950 mb-3">Cholera</h3>
          
          <div className="mb-4">
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">plasmid_identified</h4>
            <div className="bg-zinc-50 p-4 rounded border border-zinc-200">
              <p className="text-sm text-zinc-700 font-mono">
                IncC1/C2, IncA, IncF, IncC, IncA/C, pVC, pSDH-1, pSDH-2, p3iANG, Not Collected, Not performed, Missing, Not Provided, Not Applicable, Restricted Access
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">resistance_genes</h4>
            <div className="bg-zinc-50 p-4 rounded border border-zinc-200 max-h-40 overflow-y-auto">
              <p className="text-sm text-zinc-700 font-mono">
                blaCTX-M, blaNDM-1, tetA, tetB, aacA, strA, strB, qnrVC3, sul1, sul2, dfr18, dfrA1, parC, gyrA, floR, catB9, varG, nsfA, nsfB, dfrA1, arnA, mph, rpsL, bla, mdtH, cat, tetD, aphD, tetG, aac-1b, aphA1, arr2, merR, tetR, vigA, blaDHA-1, carR, folP, armA, rtmB, rtmC, rtmF, mel, mph2, Not Collected, Not performed, Missing, Not Provided, Not Applicable, Restricted Access
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">virulence_factor_gene</h4>
            <div className="bg-zinc-50 p-4 rounded border border-zinc-200">
              <p className="text-sm text-zinc-700 font-mono">
                ctxA, hlyA, tcpI, tcpA, ompU, zot, ace, ctxB, acfA, acfB, acfC, acfD, rpoS, hapA, tagA, nanH, chxA, makA, stn, vasX, rtxA, toxR, Not Collected, Not performed, Missing, Not Provided, Not Applicable, Restricted Access
              </p>
            </div>
          </div>
        </div>

        {/* Klebsiella */}
        <div className="mt-6">
          <h3 className="font-semibold text-xl text-zinc-950 mb-3">Klebsiella</h3>
          
          <div className="mb-4">
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">antimicrobial_resistant_plasmid_type</h4>
            <div className="bg-zinc-50 p-4 rounded border border-zinc-200 max-h-40 overflow-y-auto">
              <p className="text-sm text-zinc-700 font-mono">
                Col(BS512), Col(pHAD28), Col440I, Col440II, ColKP3, ColpVC, ColRNAI, IncA, IncC, IncFIA(HI1), IncFIA(pBK30683), IncFIB(K), IncFIB(K) (pCAV1099-114), IncFIB(pKPHS1), IncFIB(pNDM-Mar), IncFIB(pQil), IncFII(K), IncFII(pKPX1)/repB(R1701), IncHI1B(pNDM-MAR), IncHI2/IncHI2A, IncL, IncM2, IncN, IncP1, IncR, IncX3, IncX4, Incx6, repB(R1701), Missing, Not Provided, Not Applicable, Restricted Access
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">resistance_genes</h4>
            <div className="bg-zinc-50 p-4 rounded border border-zinc-200 max-h-40 overflow-y-auto">
              <p className="text-sm text-zinc-700 font-mono">
                aac(3)-II, aac(3)IIa, aac(3)-IIa(aacC2)a, AAC(3)-IId, aac(3)-IVa, aac(6'), aac(6')-Ia, aac(6')-Iaf, aac(6')-Iai, aac(6')-Ib-cr, aac(6')-IIc, aac(6')-Il, aac(6')-Iq, AAC(6')-Ib9, AAC(6')-Ib-cr, aadA, aadA2, aadB, ampS, ant(2")-Ia, aph(3')-I, APH(3'')-Ib, aph(4)-Ia, APH(6)-Id, aph3-Ia, armA, ARR, blaCARB, blaCEPH-A, blaCFE, blaCMY, blaCTX-M, blaCTX-M-1, blaCTX-M-2, blaCTX-M-9, blaDHA, blaIMP, blaKPC, blaMOX, blaOXA, blaOXA-1-like, blaSHV, blaTEM, blaVEB, cat, cat1, cat11, CatA1, cml, cmlA, cphA, CTX-M-15, CTX-M-3, CTX-M-65, dfrA, dfrA1, dfrA14, dfrA27, dfrA5, dfrA7, ereA, ermB, floR, FosA, GES-5, gyrA, imiS, IMP, KPC, KPC-2, LAP-2, mefB, mel, mgrB, mphA, NDM-1, OmpK35, OmpK36, OmpK37, oqxAB, OXA-1, OXA-48, OXA-485, parC, pmrB, qnrA, qnrB, qnrB1, QnrB6, QnrS, qnrS1, rmtB, rmtF, sat-2, SHV-11, SHV-134, SHV-28, strA, strB, sul1, sul2, sul3, TEM-1, TEM-2, tetA, tetB, tetC, tetD, tetG, tetK, tetM, VIM, tolC, arcAB, oqxAB, ramA, rarA, Missing, Not Provided, Not Applicable, Restricted Access
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">virulence_factor_genes</h4>
            <div className="bg-zinc-50 p-4 rounded border border-zinc-200 max-h-40 overflow-y-auto">
              <p className="text-sm text-zinc-700 font-mono">
                allS, clbA, clbQ, entB, fimD, fimH, fyuA, ICEKp, iroN, irp-1, irp2, iucA, iutA, magA, mrkC, mrkD, rmpA, rmpA2, rmpC, rmpD, uge, wabG, ybtQ, ybtS, ycfM, fimA, fimB, fimF, fimH, fimI, fimJ, arcA, arcB, mrkA, mrkB, iucB, iucC, iucD, entA, entC, entD, ybtA, ybtE, iroB, iroC, Yersiniabactin, Colibactin, Aerobactin, Salmochelin, Missing, Not Provided, Not Applicable, Restricted Access
              </p>
            </div>
          </div>
        </div>

        {/* Mpox */}
        <div className="mt-6">
          <h3 className="font-semibold text-xl text-zinc-950 mb-3">Mpox</h3>
          
          <div className="mb-4">
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">signs and symptoms</h4>
            <div className="bg-zinc-50 p-4 rounded border border-zinc-200">
              <p className="text-sm text-zinc-700 font-mono">
                Chills (sudden cold sensation), Conjunctivitis (pink eye), Cough, Fatigue (tiredness), Fever, Headache, Lesion, Lesion (Macule), Lesion (Papule), Lesion (Pustule), Lesion (Scab), Lesion (Vesicle), Myalgia (muscle pain), Back pain, Nausea, Rash, Sore throat, Sweating, Swollen Lymph Nodes, Ulcer, Vomiting (throwing up), Not Applicable, Missing, Not Collected, Not Provided, Restricted Access
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">pre-existing conditions and risk factors</h4>
            <div className="bg-zinc-50 p-4 rounded border border-zinc-200 max-h-40 overflow-y-auto">
              <p className="text-sm text-zinc-700 font-mono">
                Cancer, Diabetes mellitus (diabetes), Type I diabetes mellitus (T1D), Type II diabetes mellitus (T2D), Immunocompromised, Infectious disorder, Chancroid (Haemophilus ducreyi), Chlamydia, Gonorrhea, Herpes Simplex Virus infection (HSV), Human immunodeficiency virus (HIV), Acquired immunodeficiency syndrome (AIDS), Human papilloma virus infection (HPV), Lymphogranuloma venereum, Mycoplsma genitalium, Syphilis, Trichomoniasis, Lupus, Pregnancy, Prior therapy, Cancer treatment, Chemotherapy, HIV and Antiretroviral therapy (ART), Steroid, Transplant, Not Applicable, Missing, Not Collected, Not Provided, Restricted Access
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">complications</h4>
            <div className="bg-zinc-50 p-4 rounded border border-zinc-200">
              <p className="text-sm text-zinc-700 font-mono">
                Bronchopneumonia, Corneal infection, Delayed wound healing (lesion healing), Encephalitis, Myocarditis, Secondary infection, Sepsis, Not Applicable, Missing, Not Collected, Not Provided, Restricted Access
              </p>
            </div>
          </div>
        </div>

        {/* Malaria Human */}
        <div className="mt-6">
          <h3 className="font-semibold text-xl text-zinc-950 mb-3">Malaria Human</h3>
          
          <div className="mb-4">
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">diagnostic_procedure_of_malaria</h4>
            <div className="bg-zinc-50 p-4 rounded border border-zinc-200 max-h-60 overflow-y-auto">
              <p className="text-sm text-zinc-700 font-mono">
                Clinical Examination, In Vivo Therapeutic Efficacy Studies, Examination Of Blood Films, Immunological Method, Malarial Antigen Detection, Hrp-2 Detection Method, Pldh Detection Method, Serological Method, Enzyme-Linked Immunosorbent Assay, Immuno-Precipitation, Indirect Fluorescent Antibody Test, Indirect Haemagglutination Test, Microscopic Blood Examination, Molecular Method, Use Of Nucleic Acid Probe, Molecular Marker Studies, PCR, Gene Sequencing, Next-Generation Deep Amplicon Sequencing, Next-Generation Sequencing (NGS) Approaches, Next-Generation Sequencing (NGS), Rapid Molecular Tests / Biosensors, Preparation Of Blood Films, Staining, Field'S Staining, Giemsa Staining, Not Applicable, Missing, Not Collected, Not Performed, Not Provided, Restricted Access
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">phenotype</h4>
            <div className="bg-zinc-50 p-4 rounded border border-zinc-200">
              <p className="text-sm text-zinc-700 font-mono">
                Drug Resistance, Diagnostic Resistance, Not Applicable, Missing, Not Collected, Not Performed, Not Provided, Restricted Access
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">diagnostic_resistance_type</h4>
            <div className="bg-zinc-50 p-4 rounded border border-zinc-200">
              <p className="text-sm text-zinc-700 font-mono">
                Hrp2-Based Rapid Diagnostic Test (RDT) Resistance, Hrp3-Based Rapid Diagnostic Test (RDT) Resistance, Pldh-Based Rapid Diagnostic Test (RDT) Resistance, Aldolase-Based Rapid Diagnostic Test (RDT) Resistance, Not Applicable, Missing, Not Collected, Not Performed, Not Provided, Restricted Access
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">antimalarials</h4>
            <div className="bg-zinc-50 p-4 rounded border border-zinc-200 max-h-60 overflow-y-auto">
              <p className="text-sm text-zinc-700 font-mono">
                12-Allyldeoxoartemisinin, Albitiazolium Bromide, Amodiaquine, Amodiaquine Hydrochloride, Amopyroquine, Artefenome, Arteflene, Artemether, Artemisinin Dimer, Artemisone, Artemotil, Artenimol, Arterolane, Artesunate/Pyronaridine, Bulaquine, Cabamiquine, Chloroquine, Chloroquine Compound, Chloroquine Hydrochloride, Chloroquine Phosphate, Chloroquine Sulfate, Cinchonine, Cinchonine Hydrochloride, Cinchonine Sulfat, Cipargamin, Enpiroline, Enpiroline Phosphate, Ferroquine, Floxacrine, Ganaplacide, Halofantrine, Halofantrine Hydrochloride, Hydroxychloroquine, Hydroxychloroquine Sulfate, Lumefantrine, Mefloquine, Mefloquine Hydrochloride, Menoctone, Moxipraquine, Olaquindox, Pafuramidine, Pafuramidine Maleate, Pamaquine, Pamaquine Naphthoate, Parvaquone, Pentaquine, Piperaquine, Primaquine, Primaquine Phosphate, Proguanil, Proguanil Hydrochloride, Pyrimethamine, Pyrimethamine-Sulfadoxine, Pyronaridine, Quinidine, Quinidine Gluconate, Quinidine Sulfate, Quinine, Quinine Arsenate, Quinine Ascorbate, Quinine Glycerophosphate, Quinine Hydrochloride, Quinine Hydrochloride Anhydrous, Quinine Sulfate, Quinocide, Sulfadoxine, Sutidiazine, Tafenoquine, Tafenoquine Succinate, Tebuquine, Not Applicable, Missing, Not Collected, Not Provided, Restricted Access
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">prior_antimalarial_treatment_agent</h4>
            <div className="bg-zinc-50 p-4 rounded border border-zinc-200 max-h-60 overflow-y-auto">
              <p className="text-sm text-zinc-700 font-mono">
                12-Allyldeoxoartemisinin, Albitiazolium Bromide, Amodiaquine, Amodiaquine Hydrochloride, Amopyroquine, Artefenome, Arteflene, Artemether, Artemisinin Dimer, Artemisone, Artemotil, Artenimol, Arterolane, Artesunate/Pyronaridine, Bulaquine, Cabamiquine, Chloroquine, Chloroquine Compound, Chloroquine Hydrochloride, Chloroquine Phosphate, Chloroquine Sulfate, Cinchonine, Cinchonine Hydrochloride, Cinchonine Sulfat, Cipargamin, Enpiroline, Enpiroline Phosphate, Ferroquine, Floxacrine, Ganaplacide, Halofantrine, Halofantrine Hydrochloride, Hydroxychloroquine, Hydroxychloroquine Sulfate, Lumefantrine, Mefloquine, Mefloquine Hydrochloride, Menoctone, Moxipraquine, Olaquindox, Pafuramidine, Pafuramidine Maleate, Pamaquine, Pamaquine Naphthoate, Parvaquone, Pentaquine, Piperaquine, Primaquine, Primaquine Phosphate, Proguanil, Proguanil Hydrochloride, Pyrimethamine, Pyrimethamine-Sulfadoxine, Pyronaridine, Quinidine, Quinidine Gluconate, Quinidine Sulfate, Quinine, Quinine Arsenate, Quinine Ascorbate, Quinine Glycerophosphate, Quinine Hydrochloride, Quinine Hydrochloride Anhydrous, Quinine Sulfate, Quinocide, Sulfadoxine, Sutidiazine, Tafenoquine, Tafenoquine Succinate, Tebuquine, Not Applicable, Missing, Not Collected, Not Provided, Restricted Access
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">resistance_gene_symbol</h4>
            <div className="bg-zinc-50 p-4 rounded border border-zinc-200 max-h-60 overflow-y-auto">
              <p className="text-sm text-zinc-700 font-mono">
                HRP2 (Diagnostic Resistance), HRP3 (Diagnostic Resistance), PLDH (Diagnostic Resistance), ALDOLASE (Diagnostic Resistance), ARPS10 (Drug Resistance), AAT1 (Drug Resistance), CRT (Drug Resistance), DHFR (Drug Resistance), DHPS (Drug Resistance), EXO (Drug Resistance), FERREDOXIN (Drug Resistance), K13 (Drug Resistance), MDR1 (Drug Resistance), MDR2 (Drug Resistance), PLASMEPSIN 2/3 (Drug Resistance), VGSC (Insecticide Resistance), ACE-1 (Insecticide Resistance), RDL (GABA receptor) (Insecticide Resistance), CYP6P3 (Insecticide Resistance), CYP6M2 (Insecticide Resistance), CYP6AA1 (Insecticide Resistance), CYP9K1 (Insecticide Resistance), GST (Insecticide Resistance), COE (Insecticide Resistance), CSPS (Insecticide Resistance), Cuticular Protein Genes (Insecticide Resistance), Not Applicable, Missing, Not Provided, Restricted Access
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">resistance_variant</h4>
            <div className="bg-zinc-50 p-4 rounded border border-zinc-200 max-h-60 overflow-y-auto">
              <p className="text-sm text-zinc-700 font-mono">
                HRP2 Deletion, HRP2 Mutation, HRP3 Deletion, HRP3 Mutation, PLDH Genes Variation Or Their Protein Expression, ALDOLASE Genes Variation Or Their Protein Expression, ARPS10 V127M, AAT1 S258L, CRT 76T, CRT 72S, CRT 74I, CRT 75E, CRT 220S, CRT 271E, CRT 326S/D, CRT 371I, CRT I356T, CRT 97Y, CRT 145I, CRT 343L, CRT 353V, CRT 101F, DHFR 108N, DHFR 51I, DHFR 59R, DHFR 164L, DHPS 431V, DHPS 436S, DHPS 437G, DHPS 540E, DHPS 581G, DHPS 613S, EXO E415G, FERREDOXIN D193Y, K13 441L, K13 446I, K13 449A, K13 458Y, K13 469Y, K13 469F, K13 476I, K13 481V, K13 493H, K13 515K, K13 527H, K13 537I/D, K13 538V, K13 539T, K13 543T, K13 553L, K13 561H, K13 568G, K13 574L, K13 580Y, K13 622I, K13 675V, MDR1 N86, MDR1 86Y, MDR1 Y184, MDR1 1034C, MDR1 1042D, MDR1 1246Y, MDR1 Increased Copy Number, MDR2 T484I, PLASMEPSIN 2/3 Increased Copy Number, VGSC L995F (Kdr-West), VGSC L995S(Kdr-East), VGSC N1570Y (Super-Kdr), VGSC V402L, VGSC I1527T, ACE-1 G280S Mutation, RDL A296G Mutation, RDL A296S Mutation, CYP6P3 Overexpression Linked To Resistance, CYP6M2 Overexpression Linked To Resistance, CYP6AA1 Overexpression Linked To Resistance, CYP9K1 Overexpression Linked To Resistance, GSTs Overexpression Or Increased Activity, COEs Overexpression Or Increased Activity, CSPS Emerging Evidence, Cuticular Protein Genes Linked To Structural Changes, Not Applicable, Missing, Not Provided, Restricted Access
              </p>
            </div>
          </div>
        </div>

        {/* Malaria Vector */}
        <div className="mt-6">
          <h3 className="font-semibold text-xl text-zinc-950 mb-3">Malaria Vector</h3>
          
          <div className="mb-4">
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">insecticide_class</h4>
            <div className="bg-zinc-50 p-4 rounded border border-zinc-200">
              <p className="text-sm text-zinc-700 font-mono">
                Organochlorine Insecticide (Substance), Carbamate Insecticide (Substance), Organophosphate Insecticide, Pyrethroid, Neonicotinoids, Pyrroles, Missing, Not Applicable, Not Collected, Not Performed, Not Provided, Restricted Access
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">insecticide</h4>
            <div className="bg-zinc-50 p-4 rounded border border-zinc-200 max-h-60 overflow-y-auto">
              <p className="text-sm text-zinc-700 font-mono">
                (Organochlorine): DDT, (Carbamate) Alanycarb, (Carbamate) Bendiocarb, (Carbamate) Carbaryl, (Carbamate) Propoxur, (Organophosphate) Fenitrothion, (Organophosphate) Malathion, (Organophosphate) Malathion: Malaoxon, (Organophosphate) Pirimiphos-Methyl, (Organophosphate) Temephos, (Pyrethroid) Alpha-Cypermethrin, (Pyrethroid) Bifenthrin, (Pyrethroid) Cyfluthrin, (Pyrethroid) Cypermethrin, (Pyrethroid) Deltamethrin, (Pyrethroid) Esfenvalerate, (Pyrethroid) Lambda-Cyhalothrin, (Pyrethroid) Permethrin, (Pyrethroid) Prallethrin, (Pyrethroid) Tetramethrin, (Pyrethroid) Tetramethrin, (Pyrethroid) Transfluthrin, (Neonicotinoid) Clothianidin, (Neonicotinoid) Imidacloprid, (Neonicotinoid) Thiamethoxam, (Pyrrole) Chlorfenapyr, Missing, Not Applicable, Not Collected, Not Performed, Not Provided, Restricted Access
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">breeding_habitat</h4>
            <div className="bg-zinc-50 p-4 rounded border border-zinc-200 max-h-60 overflow-y-auto">
              <p className="text-sm text-zinc-700 font-mono">
                Animal Drinking Point, Aquatic Plant, Berkat, Birkas, Borehole, Bottle (Moveable), Broken Bucket, Bucket, Car Tyre, Cement Basin, Cement Block, Cement Pond, Cement Vase, Cement Water Tank, Cement Water Tank For Generator, Cistern, Construction Water Storage Reservoir, Construction Water Tank, Dam, Discarded Tyre, Discarded Vehicle Part, Ditch, Drain, Drinking Trough, Drum, Dug-Out Well, Dump Site, Earthen Pot, Elevated Cistern, Elevated Tank, Fish Pond, Flower Pot, Flowers, Garbage Can, Ground Level Barrel, Ground Level Cistern, Ground Level Tank, Ground Pool, Gutters, Hole, Hollow Tree, House Hold (Hh) Container, Iron Container, Jerrycan, Leaves, Man-Made, Metal And Plastic Barrel, Metal Drum, Mortar, Natural Or Artificial Breeding Habitat Not Available, Open Tube, Over Head Tank, Pit, Plastic Container, Plastic Tank, Pond, Pool, Puddle, Rain Catchment, Refrigerator Cabinet, Rice Field, Sanitary Facilitie, Stagnant Rain Water, Steel Drum, Stream, Stump Of Metal Pole, Tank, Taps, Temporary Storage Reservoir, Temporary Water Reservoir, Top Of Metal Tank, Tyre, Uncovered Ground Septic Tank, Vase, Waste Refuse, Water Outlet, Water Storage Reservoir, Water Tank, Waterstore, Well, Waterhole, Stagnant Ditch, Stagnant Canal, Missing, Not Applicable, Not Collected, Not Performed, Not Provided, Restricted Access
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">detection_of_parasite_procedure</h4>
            <div className="bg-zinc-50 p-4 rounded border border-zinc-200 max-h-60 overflow-y-auto">
              <p className="text-sm text-zinc-700 font-mono">
                Malarial Parasite Detection Test (Procedure), Malarial Parasite Screening Test (Procedure), Immunological Method, Malarial Antigen Detection, HRP-2 Detection Method, pLDH Detection Method, Serological Method, Enzyme-Linked Immunosorbent Assay, Immuno-Precipitation, Indirect Fluorescent Antibody Test, Indirect Haemagglutination Test, Microscopic Blood Examination, Molecular Method, Use Of Nucleic Acid Probe, Molecular Marker Studies, PCR, qPCR, Gene Sequencing, Next-Generation Deep Amplicon Sequencing, Next-Generation Sequencing (NGS) Approaches, Next-Generation Sequencing (NGS), Rapid Molecular Tests / Biosensors, Combines Loop-Mediated Ismal Amplification (LAMP), Preparation Of Blood Films, Staining, Field'S Staining, Giemsa Staining, Not Applicable, Missing, Not Collected, Not Performed, Not Provided, Restricted Access
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">specimen_processing</h4>
            <div className="bg-zinc-50 p-4 rounded border border-zinc-200 max-h-60 overflow-y-auto">
              <p className="text-sm text-zinc-700 font-mono">
                Enhanced Excretion, Planned Process, Resistance Identification/Monitoring, Antibody-Based Assay, Immunodetection Of Carboxylesterases, Immunodetection Of GST, Immunodetection Of P450 Monooxygenases, Bioassay, Bioassay With Synergist Test, Diagnostic Test With Synergist, Bottle Bioassay DT With Synergist, Cone Dt With Synergist, Who Larvicide DT With Synergist, Who Paper Kit DT With Synergist, Dose Response Test With Synergist, Bottle Bioassay DR Test With Synergist, Cone Dr Test With Synergist, Who Larvicide DR Test With Synergist, Who Paper Kit DR Test With Synergist, Time Response Test With Synergist, Bottle Bioassay TR Test With Synergist, Cone TR Test With Synergist, Who Larvicide TR Test With Synergist, Who Paper Kit TR Test With Synergist, Direct Bioassay, Diagnostic Test, Bottle Bioassay DT, Centre For Disease Control And Prevention Bottle Bioassay, Cone DT, Who Larvicide DT, Who Paper Kit DT, Dose Response Test, Bottle Bioassay DR Test, Cone Dr Test, Who Larvicide Dr Test, Who Paper Kit Dr Test, Insecticide Efficacy Test, Cone ET, Who Paper Kit ET, Who Wire Ball ET, Time Response Test, Bottle Bioassay TR Test, Cone TR Test, Who Larvicide TR Test, Who Paper Kit TR Test, Topical Application Insecticide Resistance Bioassay, Biochemical Assay, Acetylcholinesterase Assay, AChE Activity Assay, Insensitive Ache Diagnostic Assay, Carboxylesterase Activity Assay, CoE Dot-Blot Assay, CoE Isoenzyme Analysis, Malathion Metabolism Assay, Napthyl Acetate Assay, A-Napthyl Acetate Assay, B-Napthyl Acetate Assay, Insecticide Resistance By Detecting Alpha Esterase Activity Assay, Insecticide Resistance By Detecting Beta Esterase Activity Assay, PNPA Assay, Catalase Activity Assay, GST Related Assay, CDNB Rate Reaction Assay, DCNB Rate Reaction Assay, DDT Dehydrochlorination Measurement, Organic Peroxide Rate Reaction Assay, P450 Monooxygenase Assay, Heme Content Measurement, P450 Activity Assay, Insecticide Resistance By Detecting Mixed-Function Oxidase Assay, Peroxidase Assay, Superoxidase Dismutase Assay, Molecular Assay, Dot-Blot For Gene Amplification, Expression Analysis, Northern Analysis, RNA Profiling, Microarray-Based Analysis, Genome Wide Microarray Analysis, Targeted/Selective Microarray Analysis, RNA Dot-Blot, RT-PCR Assay, Real Time PCR, Semi-Quantitative PCR, Monitoring Known Mutations, Fluorogenic PCR Assay, Invasive Cleavage Invader, SISAR, Ligase Chain Reaction (LCR), Ligation Detection Reaction, Insecticide Resistance By Ligase Detection Reaction Assay, Insecticide Resistance By Ligase Detection Reaction-Fluorescent Microsphere Assay, PCR Amplification Of Specific Alleles, PCR-RFLP, Sequence Specific Oligonucleotide Probe, Single Base Extension, Novel Mutation Identification, Insecticide Resistance By Amplification Refractory Mutation System Assay, Insecticide Resistance By Nested Polymerase Chain Reaction Assay, Insecticide Resistance By Primer Introduced Restriction Analysis Pcr Assay, Insecticide Resistance By Short Interspersed Elements Pcr Assay, Sequencing, Automated Sequencing, Manual Sequencing, Penetration/Excretion Assay, Fluorescent Insecticide Assay, Insecticide Immunostaining Assay, Radiolabelled Insecticide Assay, Reduced Cuticle Penetration, Investigation Relating To The Insect Vector, Estimation Of Biting Habits, Estimation Of Longevity, Mark-Release-Recapture, Parity Dissection, Estimation Of Mosquito Density, Mark-Release-Recapture, Estimation Of Natural Infection, Not Applicable, Missing, Not Collected, Not Performed, Not Provided, Restricted Access
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">attribute_of_vector</h4>
            <div className="bg-zinc-50 p-4 rounded border border-zinc-200 max-h-60 overflow-y-auto">
              <p className="text-sm text-zinc-700 font-mono">
                Anautogeny, Anthropophily, Autogeny, Facultative Autogeny, Obligatory Autogeny, Deficiency Of Midgut Receptor, Domestic Behaviour, Endophagy, Endophily, Exophagy, Exophily, Flight Capacity, Increased Sensitivity Of Olfactory Sensillum, Intermediate Behaviour, Male Fecundity, Protandry, Quality Of Optical Resolution, Acuity, Minimum Resolvable Angle Of An Eye, Quality Of Optical Sensitivity, Angular Sensitivity, Ommatidial Acceptance Angle, Rhabdom Acceptance Angle, Responses Of The Visual Pigments And The Chromophores, 11-Cis Configuration, All-Trans Configuration, Larval Spectral Sensitivity, Sexual Responsiveness And Refractoriness, Susceptibility, Swarm Quality, Ceiling Swarm, Free Swarm, Marker Swarm, Space Swarm, Top Swarm, Vector Competence, Wild Behaviour, Zoophily, Not Applicable, Missing, Not Collected, Not Performed, Not Provided, Restricted Access
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">resistance_gene_symbol</h4>
            <div className="bg-zinc-50 p-4 rounded border border-zinc-200 max-h-60 overflow-y-auto">
              <p className="text-sm text-zinc-700 font-mono">
                HRP2 (Diagnostic Resistance), HRP3 (Diagnostic Resistance), PLDH (Diagnostic Resistance), ALDOLASE (Diagnostic Resistance), ARPS10 (Drug Resistance), AAT1 (Drug Resistance), CRT (Drug Resistance), DHFR (Drug Resistance), DHPS (Drug Resistance), EXO (Drug Resistance), FERREDOXIN (Drug Resistance), K13 (Drug Resistance), MDR1 (Drug Resistance), MDR2 (Drug Resistance), PLASMEPSIN 2/3 (Drug Resistance), VGSC (Insecticide Resistance), ACE-1 (Insecticide Resistance), RDL (GABA receptor) (Insecticide Resistance), CYP6P3 (Insecticide Resistance), CYP6M2 (Insecticide Resistance), CYP6AA1 (Insecticide Resistance), CYP9K1 (Insecticide Resistance), GST (Insecticide Resistance), COE (Insecticide Resistance), CSPS (Insecticide Resistance), Cuticular Protein Genes (Insecticide Resistance), Not Applicable, Missing, Not Provided, Restricted Access
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">resistance_variant</h4>
            <div className="bg-zinc-50 p-4 rounded border border-zinc-200 max-h-60 overflow-y-auto">
              <p className="text-sm text-zinc-700 font-mono">
                HRP2 Deletion, HRP2 Mutation, HRP3 Deletion, HRP3 Mutation, PLDH Genes Variation Or Their Protein Expression, ALDOLASE Genes Variation Or Their Protein Expression, ARPS10 V127M, AAT1 S258L, CRT 76T, CRT 72S, CRT 74I, CRT 75E, CRT 220S, CRT 271E, CRT 326S/D, CRT 371I, CRT I356T, CRT 97Y, CRT 145I, CRT 343L, CRT 353V, CRT 101F, DHFR 108N, DHFR 51I, DHFR 59R, DHFR 164L, DHPS 431V, DHPS 436S, DHPS 437G, DHPS 540E, DHPS 581G, DHPS 613S, EXO E415G, FERREDOXIN D193Y, K13 441L, K13 446I, K13 449A, K13 458Y, K13 469Y, K13 469F, K13 476I, K13 481V, K13 493H, K13 515K, K13 527H, K13 537I/D, K13 538V, K13 539T, K13 543T, K13 553L, K13 561H, K13 568G, K13 574L, K13 580Y, K13 622I, K13 675V, MDR1 N86, MDR1 86Y, MDR1 Y184, MDR1 1034C, MDR1 1042D, MDR1 1246Y, MDR1 Increased Copy Number, MDR2 T484I, PLASMEPSIN 2/3 Increased Copy Number, VGSC L995F (Kdr-West), VGSC L995S(Kdr-East), VGSC N1570Y (Super-Kdr), VGSC V402L, VGSC I1527T, ACE-1 G280S Mutation, RDL A296G Mutation, RDL A296S Mutation, CYP6P3 Overexpression Linked To Resistance, CYP6M2 Overexpression Linked To Resistance, CYP6AA1 Overexpression Linked To Resistance, CYP9K1 Overexpression Linked To Resistance, GSTs Overexpression Or Increased Activity, COEs Overexpression Or Increased Activity, CSPs Emerging Evidence, Cuticular Protein Genes Linked To Structural Changes, Not Applicable, Missing, Not Collected, Not performed, Not Provided, Restricted Access
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Troubleshooting Common Errors
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-base leading-7 text-zinc-700">
          <li><strong>"Required header is missing":</strong> Check that all mandatory columns from the template exist in your file and that the names have not been changed.</li>
          <li><strong>"Invalid date format":</strong> Ensure all your dates are formatted as YYYY-MM-DD.</li>
          <li><strong>"Invalid value. Allowed values are...":</strong> Make sure the data in your picklist columns exactly matches one of the allowed options. Check for extra spaces or spelling mistakes.</li>
          <li><strong>Multi-select field errors:</strong> Ensure multiple values are separated by commas with no spaces, and that each value matches exactly as shown in the reference lists (including capitalization, punctuation, and slashes).</li>
          <li><strong>My file won't upload or all data is in one column:</strong> This usually means the columns are separated by spaces or commas instead of tabs. Re-export your file, making sure to select TSV as the format.</li>
          <li><strong>Missing mandatory fields:</strong> Check that all yellow-highlighted fields in the template have values entered. Missing required fields will cause errors during upload.</li>
        </ul>
      </div>

      {/* Additional Resources */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Need More Help?
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          For additional assistance or questions about the metadata template, please contact the AGARI support team or refer to the complete user manual that accompanies the metadata template.
        </p>
      </div>
    </GuidePage>
  );
}

export default GuideMetadataFormatPage;
