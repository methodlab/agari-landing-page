import React from 'react';
import GuidePage from '../pages/Guide.jsx';

function GuideSubmissionErrorsPage() {
  return (
    <GuidePage
      title="How do I view and correct errors in my submission?"
      breadcrumbLabel="How do I view and correct errors in my submission?"
    >
      {/* Overview */}
      <div className="text-base leading-7 text-zinc-700">
        <p>
          This guide helps you identify and resolve common errors encountered when filling out the Metadata Collection Template. Each error type includes clear explanations, step-by-step solutions, and practical examples to ensure your data meets validation requirements for successful submission to the AGARI platform.
        </p>
      </div>

      {/* Purpose of this guide */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Purpose of this guide
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          When uploading data to the AGARI system, the validation system checks for data integrity and format compliance. This guide provides solutions for:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>Formatting errors in date fields</li>
          <li>Invalid dropdown selections</li>
          <li>Missing mandatory fields</li>
          <li>Data relationship violations</li>
          <li>File matching errors</li>
        </ul>
      </div>

      {/* Error Types and Resolutions */}
      <div className="flex flex-col gap-6">
        <h2 className="font-bold text-2xl text-zinc-950">
          Error Types and Resolutions
        </h2>

        {/* Error 1: Date Format */}
        <div className="flex flex-col gap-4 border-l-4 border-zinc-300 pl-4">
          <h3 className="font-bold text-xl text-zinc-950">
            Error 1: Date must be in YYYY-MM-DD format
          </h3>
          <div>
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">What this error means</h4>
            <p className="text-base leading-7 text-zinc-700">
              The date entered does not follow the required ISO 8601 date format. All dates must include year, month, and day in a specific format.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">How to fix it</h4>
            <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
              <li>Locate the cell with the date error (it will be highlighted in red or shown in the error message)</li>
              <li>Delete the current value</li>
              <li>Enter the date in the format: YYYY-MM-DD</li>
              <li>Ensure all parts are present (year with 4 digits, month with 2 digits, day with 2 digits)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">Examples</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-zinc-300">
                <thead>
                  <tr className="bg-zinc-100">
                    <th className="border border-zinc-300 px-4 py-2 text-left">Incorrect Format</th>
                    <th className="border border-zinc-300 px-4 py-2 text-left">Correct Format</th>
                    <th className="border border-zinc-300 px-4 py-2 text-left">Issue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-zinc-300 px-4 py-2">15/07/2024</td>
                    <td className="border border-zinc-300 px-4 py-2">2024-07-15</td>
                    <td className="border border-zinc-300 px-4 py-2">Wrong date separator</td>
                  </tr>
                  <tr>
                    <td className="border border-zinc-300 px-4 py-2">July 15, 2024</td>
                    <td className="border border-zinc-300 px-4 py-2">2024-07-15</td>
                    <td className="border border-zinc-300 px-4 py-2">Text format not allowed</td>
                  </tr>
                  <tr>
                    <td className="border border-zinc-300 px-4 py-2">2024</td>
                    <td className="border border-zinc-300 px-4 py-2">2024-07-15</td>
                    <td className="border border-zinc-300 px-4 py-2">Year only is incomplete</td>
                  </tr>
                  <tr>
                    <td className="border border-zinc-300 px-4 py-2">24-07-15</td>
                    <td className="border border-zinc-300 px-4 py-2">2024-07-15</td>
                    <td className="border border-zinc-300 px-4 py-2">Year needs 4 digits</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Error 2: Dropdown Values */}
        <div className="flex flex-col gap-4 border-l-4 border-zinc-300 pl-4">
          <h3 className="font-bold text-xl text-zinc-950">
            Error 2: Each dropdown value must be a valid option from the list
          </h3>
          <div>
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">What this error means</h4>
            <p className="text-base leading-7 text-zinc-700">
              The value entered is not in the allowed list of options for this field. This happens when typing manually instead of selecting from the dropdown.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">How to fix it</h4>
            <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
              <li>Click on the cell showing the error</li>
              <li>Click the dropdown arrow that appears</li>
              <li>Select a value from the list provided</li>
              <li>If your desired value is not in the list, check the 'Picklist' sheet for the complete list of allowed values</li>
              <li>Never type values manually - always use the dropdown selector</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">Common mistakes</h4>
            <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
              <li>Typing 'south africa' instead of selecting 'South Africa' from the dropdown</li>
              <li>Adding extra spaces before or after the value</li>
              <li>Using abbreviations (e.g., 'SA' instead of 'South Africa')</li>
              <li>Misspelling the option</li>
            </ul>
          </div>
        </div>

        {/* Error 3: Multi-select Values */}
        <div className="flex flex-col gap-4 border-l-4 border-zinc-300 pl-4">
          <h3 className="font-bold text-xl text-zinc-950">
            Error 3: Values must be a valid option from the list (Multi-select)
          </h3>
          <div>
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">What this error means</h4>
            <p className="text-base leading-7 text-zinc-700">
              One or more values entered in a multi-select field do not match the allowed options exactly. Multi-select fields allow multiple values but each must be exact.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">How to fix it</h4>
            <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
              <li>Check the cell note (hover over the cell) for the complete list of allowed values</li>
              <li>Type each value EXACTLY as shown in the list</li>
              <li>Separate multiple values with commas and NO SPACES</li>
              <li>Maintain exact capitalization, punctuation, and slashes</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">Example</h4>
            <div className="bg-zinc-50 p-4 rounded-lg space-y-2">
              <div>
                <span className="font-semibold">Incorrect:</span> <code className="bg-white px-2 py-1 rounded text-sm">IncA, pSDH-1, pVC</code>
                <span className="text-zinc-600 ml-2">(Spaces after commas)</span>
              </div>
              <div>
                <span className="font-semibold">Correct:</span> <code className="bg-white px-2 py-1 rounded text-sm">IncA,pSDH-1,pVC</code>
                <span className="text-zinc-600 ml-2">(No spaces, exact match)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Error 4: Numeric Values */}
        <div className="flex flex-col gap-4 border-l-4 border-zinc-300 pl-4">
          <h3 className="font-bold text-xl text-zinc-950">
            Error 4: Value must be a number
          </h3>
          <div>
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">What this error means</h4>
            <p className="text-base leading-7 text-zinc-700">
              The field requires a numeric value but text or special characters were entered.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">How to fix it</h4>
            <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
              <li>Remove any letters or special characters</li>
              <li>Remove units of measurement (e.g., 'years', 'days', '%')</li>
              <li>Enter only whole numbers (integers)</li>
              <li>Do not include spaces or commas as thousand separators</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">Common examples</h4>
            <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
              <li>Host Age: Enter '35' not '35 years'</li>
              <li>Number of Vaccine doses received: Enter '15' not 'Fifteen'</li>
            </ul>
          </div>
        </div>

        {/* Error 5: Mandatory Fields */}
        <div className="flex flex-col gap-4 border-l-4 border-zinc-300 pl-4">
          <h3 className="font-bold text-xl text-zinc-950">
            Error 5: Value is mandatory
          </h3>
          <div>
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">What this error means</h4>
            <p className="text-base leading-7 text-zinc-700">
              A required field has been left empty. Mandatory fields (highlighted in yellow) must have values for successful submission.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">How to fix it</h4>
            <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
              <li>Look for cells highlighted in yellow - these are mandatory</li>
              <li>Check the error message to identify which specific field is missing</li>
              <li>Enter an appropriate value in the empty field</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">Common mandatory fields for Cholera</h4>
            <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
              <li>study_id</li>
              <li>isolate_id</li>
              <li>geo_loc_name_country</li>
              <li>sample_collection_date</li>
              <li>specimen_source_material_category</li>
              <li>biospecimen</li>
            </ul>
          </div>
        </div>

        {/* Error 6: Date Relationships */}
        <div className="flex flex-col gap-4 border-l-4 border-zinc-300 pl-4">
          <h3 className="font-bold text-xl text-zinc-950">
            Error 6: Date relationship errors
          </h3>
          <div>
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">Types of date relationship errors</h4>
            <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
              <li>Date must be before sample_receive_date</li>
              <li>Date must be after sample_collection_date</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">What these errors mean</h4>
            <p className="text-base leading-7 text-zinc-700">
              Dates must follow a logical sequence. For example, a sample cannot be received before it was collected, and processing cannot occur before receipt.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">How to fix it</h4>
            <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
              <li>Review all date fields in the row</li>
              <li>Ensure dates follow logical order: Collection Date → Received Date → Processing Date → Sequencing Date</li>
              <li>Check for data entry errors (e.g., typos in year)</li>
              <li>Verify dates with original records if necessary</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">Example of correct date sequence</h4>
            <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
              <li>Sample collection: 2024-07-10</li>
              <li>Sample received: 2024-07-11</li>
              <li>Processing date: 2024-07-12</li>
              <li>Sequencing date: 2024-07-15</li>
            </ul>
          </div>
        </div>

        {/* Error 7: Unique Values */}
        <div className="flex flex-col gap-4 border-l-4 border-zinc-300 pl-4">
          <h3 className="font-bold text-xl text-zinc-950">
            Error 7: Value must be unique
          </h3>
          <div>
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">What this error means</h4>
            <p className="text-base leading-7 text-zinc-700">
              The same value appears more than once in a field that requires unique identifiers. Common in isolate_id.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">How to fix it</h4>
            <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
              <li>Find and review all duplicate values</li>
              <li>Update duplicates with unique identifiers</li>
              <li>Consider adding suffixes (e.g., -A, -B) to differentiate samples</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">Tips for maintaining uniqueness</h4>
            <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
              <li>Use a consistent naming convention</li>
              <li>Include location or date codes in IDs</li>
              <li>Maintain a master list of used IDs</li>
              <li>Use Excel's Data Validation to prevent duplicates during entry</li>
            </ul>
          </div>
        </div>

        {/* Error 9: FASTA Matching */}
        <div className="flex flex-col gap-4 border-l-4 border-zinc-300 pl-4">
          <h3 className="font-bold text-xl text-zinc-950">
            Error 9: Fasta file name / fasta header name must match record in the accompanying metadata
          </h3>
          <div>
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">What this error means</h4>
            <p className="text-base leading-7 text-zinc-700">
              The validation system requires that the fasta file name and fasta header name provided in the metadata must exactly match the accompanied fasta file.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">How to fix it</h4>
            <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
              <li>Open your FASTA file in a text editor</li>
              <li>Check the sequence headers (lines starting with '&gt;')</li>
              <li>Ensure the sequence headers in metadata exactly matches the header (after '&gt;' symbol)</li>
              <li>Update either the metadata or FASTA file to ensure consistency</li>
              <li>Check if the fasta file name matches the fasta file in the metadata</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-zinc-900 mb-2">Example</h4>
            <div className="bg-zinc-50 p-4 rounded-lg space-y-2">
              <div className="space-y-1">
                <div><span className="font-semibold">Sequence header:</span> <code className="bg-white px-2 py-1 rounded text-sm">&gt;NICD-01</code></div>
                <div><span className="font-semibold">Metadata Fasta header name:</span> <code className="bg-white px-2 py-1 rounded text-sm">&gt;NICD-01</code></div>
                <div className="text-green-700">✓ These match correctly</div>
              </div>
              <div className="space-y-1 mt-4">
                <div><span className="font-semibold">FASTA header:</span> <code className="bg-white px-2 py-1 rounded text-sm">&gt;NICD_01</code></div>
                <div><span className="font-semibold">Metadata isolate_id:</span> <code className="bg-white px-2 py-1 rounded text-sm">NICD-01</code></div>
                <div className="text-red-700">✗ These don't match (underscore vs hyphen)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Best Practices for Error Prevention
        </h2>
        
        <div>
          <h3 className="font-semibold text-lg text-zinc-900 mb-2">Before data entry</h3>
          <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
            <li>Download and use the latest template version</li>
            <li>Review the Instructions tab thoroughly</li>
            <li>Familiarize yourself with mandatory fields (yellow highlighting)</li>
            <li>Check the Picklist tab for allowed values</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-zinc-900 mb-2">During data entry</h3>
          <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
            <li>Fill mandatory fields first</li>
            <li>Use dropdown menus whenever available</li>
            <li>Double-check date formats (YYYY-MM-DD)</li>
            <li>Avoid copy-pasting from other sources without verification</li>
            <li>Save your work frequently</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-zinc-900 mb-2">After data entry</h3>
          <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
            <li>Use Excel's Data Validation to check for errors</li>
            <li>Sort by each column to identify outliers or blanks</li>
            <li>Check for duplicate IDs using conditional formatting</li>
            <li>Verify FASTA file headers match metadata IDs</li>
            <li>Run a test upload with a small subset of data first</li>
          </ul>
        </div>
      </div>

      {/* Quick Reference Guide */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Quick Reference Guide
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-zinc-300">
            <thead>
              <tr className="bg-zinc-100">
                <th className="border border-zinc-300 px-4 py-2 text-left">Error Type</th>
                <th className="border border-zinc-300 px-4 py-2 text-left">Quick Fix</th>
                <th className="border border-zinc-300 px-4 py-2 text-left">Prevention</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-zinc-300 px-4 py-2">Date format</td>
                <td className="border border-zinc-300 px-4 py-2">Use YYYY-MM-DD format</td>
                <td className="border border-zinc-300 px-4 py-2">Set cell format to Text before entry</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 px-4 py-2">Invalid dropdown</td>
                <td className="border border-zinc-300 px-4 py-2">Select from dropdown list</td>
                <td className="border border-zinc-300 px-4 py-2">Never type manually</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 px-4 py-2">Multi-select</td>
                <td className="border border-zinc-300 px-4 py-2">Use commas, no spaces</td>
                <td className="border border-zinc-300 px-4 py-2">Check cell notes for exact spelling</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 px-4 py-2">Not a number</td>
                <td className="border border-zinc-300 px-4 py-2">Remove text/units</td>
                <td className="border border-zinc-300 px-4 py-2">Enter numbers only</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 px-4 py-2">Mandatory field</td>
                <td className="border border-zinc-300 px-4 py-2">Fill yellow cells</td>
                <td className="border border-zinc-300 px-4 py-2">Complete all yellow fields first</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 px-4 py-2">Date sequence</td>
                <td className="border border-zinc-300 px-4 py-2">Check chronological order</td>
                <td className="border border-zinc-300 px-4 py-2">Verify dates against records</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 px-4 py-2">Duplicate ID</td>
                <td className="border border-zinc-300 px-4 py-2">Make each ID unique</td>
                <td className="border border-zinc-300 px-4 py-2">Use conditional formatting</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 px-4 py-2">FASTA mismatch</td>
                <td className="border border-zinc-300 px-4 py-2">Match IDs exactly</td>
                <td className="border border-zinc-300 px-4 py-2">Check headers before upload</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Need Additional Help */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-zinc-950">
          Need Additional Help?
        </h2>
        <p className="text-base leading-7 text-zinc-700">
          If you continue to experience errors after following this guide, please:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
          <li>Take a screenshot of the error message</li>
          <li>Note the row and column where the error occurs</li>
          <li>Contact your data management support team</li>
          <li>Provide the error details and this guide reference</li>
        </ul>
      </div>

      {/* Version Info */}
      <div className="text-sm text-zinc-500 mt-8 pt-4 border-t border-zinc-200">
        Version 1.0 | November 2024
      </div>
    </GuidePage>
  );
}

export default GuideSubmissionErrorsPage;
