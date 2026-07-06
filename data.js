// Rule of Law issues by country — editable data source for RuleOfLaw_Iframe.html
// Shape: { "Country": [ { "t": <category>, "i": <issue text>, "k": { "<year>": "<STATUS>" } }, ... ] }
//   t = category (Lobbying / Conflict of Interest / Political Finance / Enforcement / Criminalisation)
//   k = per-year status; omit a year to leave that cell blank.
//   Status values: IMPLEMENTED, SOME PROGRESS, MENTIONED, NO PROGRESS, NO FOLLOW-UP
//   (composite Excel labels like "SOME PROGRESS / RECOMMENDATION ISSUED" are also accepted).

const DATA = {
  "Slovakia": [
    {
      "t": "Lobbying",
      "i": "Lack of lobbying regulation",
      "k": {
        "2020": "MENTIONED",
        "2021": "NO PROGRESS",
        "2022": "RECOMMENDATION ISSUED/NO PROGRESS",
        "2023": "RECOMMENDATION ISSUED/NO PROGRESS",
        "2024": "RECOMMENDATION ISSUED/NO PROGRESS",
        "2025": "RECOMMENDATION ISSUED/NO PROGRESS"
      }
    },
    {
      "t": "Lobbying",
      "i": "Lack of lobbying register",
      "k": {
        "2020": "MENTIONED",
        "2021": "NO PROGRESS",
        "2022": "NO PROGRESS",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Lobbying",
      "i": "Lack of ethical code on lobbying",
      "k": {
        "2020": "MENTIONED",
        "2021": "NO PROGRESS",
        "2022": "NO PROGRESS",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Lobbying",
      "i": "Lack of definitions",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO PROGRESS",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Lobbying",
      "i": "Lack of sanctions",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO PROGRESS",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Insufficient legal framework of preventing conflicts of interest between media owners and ruling parties, party groups or politicians.",
      "k": {
        "2020": "MENTIONED",
        "2021": "NO FOLLOW-UP",
        "2022": "NO FOLLOW-UP",
        "2023": "NO FOLLOW-UP",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Weaknesses in the asset declaration publication and verification framework for public officials",
      "k": {
        "2021": "MENTIONED",
        "2022": "MENTIONED",
        "2023": "SOME PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Lack of centralised oversight of conflict of interest and lobbying rules",
      "k": {
        "2021": "MENTIONED",
        "2022": "SOME PROGRESS",
        "2023": "NO PROGRESS",
        "2024": "NO FOLLOW-UP",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Lack of comprehensive policy on gifts and benefits for government officials",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "No existing code of ethics for members of parliament",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Political Finance",
      "i": "No limit for cash donations during the pre-election period",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO PROGRESS",
        "2023": "NO FOLLOW-UP",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Political Finance",
      "i": "Limited capacities of oversight bodies",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO PROGRESS",
        "2023": "NO FOLLOW-UP",
        "2024": "NO FOLLOW-UP",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Political Finance",
      "i": "Need for strengthening of oversight mechanisms",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO PROGRESS",
        "2023": "NO FOLLOW-UP",
        "2024": "NO FOLLOW-UP",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Political Finance",
      "i": "Concerns over political nominations in oversight bodies",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO PROGRESS",
        "2023": "NO FOLLOW-UP",
        "2024": "NO FOLLOW-UP",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Political Finance",
      "i": "Rapid legislative changes before elections",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO FOLLOW-UP",
        "2023": "NO FOLLOW-UP",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Political Finance",
      "i": "Weak criminalization of bribery (Crime of electoral corruption)",
      "k": {
        "2022": "MENTIONED",
        "2023": "SOME PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Political Finance",
      "i": "Insufficient sanctions for electoral corruption",
      "k": {
        "2022": "MENTIONED",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Political Finance",
      "i": "Limited transparency at sub-national level",
      "k": {
        "2022": "MENTIONED",
        "2023": "NO PROGRESS",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Political Finance",
      "i": "Risk of bypassing campaign \ntransparency rules (usage of PR agencies)",
      "k": {
        "2023": "MENTIONED",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Political Finance",
      "i": "Risk of excessive government access to internal party information due to new reform of political party legislation",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "Dissolved Special Prosecutor’s Office",
      "k": {
        "2024": "MENTIONED",
        "2025": "MENTIONED"
      }
    },
    {
      "t": "Enforcement",
      "i": "The abolishment of specialised anti-corruption bodies",
      "k": {
        "2024": "MENTIONED",
        "2025": "MENTIONED"
      }
    },
    {
      "t": "Enforcement",
      "i": "Article 6(10) of the Act on Prosecutors still makes it possible for the immediate superior to remove a case from the subordinated prosecutor and decide on it.",
      "k": {
        "2025": "MENTIONED"
      }
    },
    {
      "t": "Criminalisation",
      "i": "Update of the 2019 National Anti-Corruption Programme",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO PROGRESS",
        "2023": "NO FOLLOW-UP",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Criminalisation",
      "i": "Amendments to the criminal offence of electoral corruption and to transparency requirements in political party finance",
      "k": {
        "2023": "MENTIONED",
        "2024": "NO PROGRESS",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Criminalisation",
      "i": "Public contracting remains vulnerable to risks of corruption",
      "k": {
        "2023": "MENTIONED",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    }
  ],
  "Germany": [
    {
      "t": "Lobbying",
      "i": "Lobbyregister -introduction of national Lobbyregister",
      "k": {
        "2020": "MENTIONED",
        "2021": "SOME PROGRESS",
        "2022": "IMPLEMENTED"
      }
    },
    {
      "t": "Lobbying",
      "i": "Lobbyregister - considerable exemptions of obligation to register in lobbyregister",
      "k": {
        "2020": "MENTIONED",
        "2021": "NO PROGRESS",
        "2022": "SOME PROGRESS",
        "2023": "SOME PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Lobbying",
      "i": "Lobbyregister - lack of real time reporting of lobby meetings",
      "k": {
        "2025": "MENTIONED"
      }
    },
    {
      "t": "Lobbying",
      "i": "Lobbyregister - circumvention of need of registration by companies outsourcing their lobby activities",
      "k": {
        "2023": "MENTIONED",
        "2024": "IMPLEMENTED"
      }
    },
    {
      "t": "Lobbying",
      "i": "Lobbyregister - Gaps in the reporting of lobbying cost data",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO FOLLOW-UP",
        "2023": "NO PROGRESS",
        "2024": "IMPLEMENTED"
      }
    },
    {
      "t": "Lobbying",
      "i": "Lobbyregister - no recording of meetings with technical level in ministries",
      "k": {
        "2021": "MENTIONED",
        "2022": "SOME PROGRESS",
        "2023": "SOME PROGRESS",
        "2024": "IMPLEMENTED"
      }
    },
    {
      "t": "Lobbying",
      "i": "Lobbyregister - no disclosure of specific legislation lobbied",
      "k": {
        "2024": "IMPLEMENTED"
      }
    },
    {
      "t": "Lobbying",
      "i": "Lack of an independent, mandated, and well-resourced lobbying oversight body",
      "k": {
        "2022": "MENTIONED",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Lobbying",
      "i": "Lobbyregister - Weak punitive measures for breaches of lobbying regulation (sanctions)",
      "k": {
        "2023": "MENTIONED",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Lobbying",
      "i": "Introduction of Legislative Footprint",
      "k": {
        "2021": "MENTIONED",
        "2022": "SOME PROGRESS",
        "2023": "SOME PROGRESS/RECOMMENDATION ISSUED",
        "2024": "SOME PROGRESS/RECOMMENDATION ISSUED",
        "2025": "NO PROGRESS/RECOMMENDATION ISSUED"
      }
    },
    {
      "t": "Lobbying",
      "i": "Introduction of Federal Transparency Law",
      "k": {
        "2025": "MENTIONED"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "renumerated side jobs for MPs - disclosure threshold",
      "k": {
        "2021": "IMPLEMENTED"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "renumerated side jobs for MPs - prohibition of renumerated lobby activities",
      "k": {
        "2021": "IMPLEMENTED"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "renumerated side jobs for MPs - prohibition of renumerated lectures that are in connection to their parliamentary work",
      "k": {
        "2021": "IMPLEMENTED"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Lack of mandatory disclosure requirementrs for the actual time spent on renumerated side job by MPs",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO PROGRESS",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "delays in the reporting of MP side jobs",
      "k": {
        "2022": "MENTIONED",
        "2023": "NO PROGRESS",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Lack of disclosure requirements for conflicts of interest in parliamentary commitees",
      "k": {
        "2021": "MENTIONED",
        "2022": "IMPLEMENTED"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Lack of ad-hoc disclosure requirements for conflicts of interest emerging in relation to a matter under discussion in parliament",
      "k": {
        "2022": "MENTIONED",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Lack of regulaton requiring disclosure of assets by members of the Federal Government",
      "k": {
        "2020": "MENTIONED",
        "2021": "NO PROGRESS",
        "2022": "NO PROGRESS",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Lack of regulaton requiring disclosure/notification of assets and financial interests by members of the Federal Parliament",
      "k": {
        "2020": "MENTIONED",
        "2021": "SOME PROGRESS",
        "2022": "NO PROGRESS",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Lack of obligations for MPs to disclose shareholdings",
      "k": {
        "2020": "MENTIONED",
        "2021": "SOME PROGRESS",
        "2022": "NO PROGRESS",
        "2023": "SOME PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Limited scope of financial declarations of MPs, not including spouses and dependent family members",
      "k": {
        "2022": "MENTIONED",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "weak /inconsistent revolving doors policies /legal cooling off period",
      "k": {
        "2021": "MENTIONED",
        "2022": "MENTIONED",
        "2023": "RECOMMENDATION ISSUED",
        "2024": "RECOMMENDATION ISSUED",
        "2025": "SOME PROGRESS"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Lack of a fully independent oversight body with mandate to investigate breaches",
      "k": {
        "2022": "MENTIONED",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Lack of human resources of current oversight body",
      "k": {
        "2020": "MENTIONED",
        "2021": "NO FOLLOW-UP",
        "2022": "NO FOLLOW-UP",
        "2023": "NO FOLLOW-UP",
        "2024": "NO PROGRESS",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "No restrictions on the holdings of financial interests by MPs or on them entering into contracts with state authorities",
      "k": {
        "2020": "MENTIONED",
        "2021": "NO FOLLOW-UP",
        "2022": "NO FOLLOW-UP",
        "2023": "NO FOLLOW-UP",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Political Finance",
      "i": "Significant time lapse between party income and its disclosure in reporting",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO PROGRESS",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Political Finance",
      "i": "Inaccessible format of the publicly available reporting data",
      "k": {
        "2025": "MENTIONED"
      }
    },
    {
      "t": "Political Finance",
      "i": "Regulations of hidden third party campaigns",
      "k": {
        "2022": "MENTIONED",
        "2023": "NO PROGRESS",
        "2024": "SOME PROGRESS",
        "2025": "IMPLEMENTED"
      }
    },
    {
      "t": "Political Finance",
      "i": "Need for lower donations thresholds for public disclosure",
      "k": {
        "2021": "MENTIONED",
        "2022": "SOME PROGRESS",
        "2023": "NO FOLLOW-UP",
        "2024": "SOME PROGRESS",
        "2025": "SOME PROGRESS"
      }
    },
    {
      "t": "Political Finance",
      "i": "No caps on donations",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Political Finance",
      "i": "Lack of Regulation of Party Sponsoring",
      "k": {
        "2021": "MENTIONED",
        "2022": "SOME PROGRESS",
        "2023": "NO PROGRESS",
        "2024": "SOME PROGRESS",
        "2025": "IMPLEMENTED"
      }
    },
    {
      "t": "Political Finance",
      "i": "Insufficient  human and financial resources of the oversight body",
      "k": {
        "2022": "MENTIONED",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Political Finance",
      "i": "Oversight body's lack of access to tax information of donors",
      "k": {
        "2022": "MENTIONED",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Political Finance",
      "i": "Risk of dependency on private donations",
      "k": {
        "2023": "MENTIONED",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Political Finance",
      "i": "Forwarding of political donations (Weiterleitungsspenden)",
      "k": {
        "2025": "MENTIONED"
      }
    },
    {
      "t": "Enforcement",
      "i": "FIU - low personal and technical resources",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO FOLLOW-UP",
        "2023": "SOME PROGRESS",
        "2024": "SOME PROGRESS",
        "2025": "IMPLEMENTED"
      }
    },
    {
      "t": "Enforcement",
      "i": "Low level of enforcement of corporate liability in foreign bribery",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO PROGRESS",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "limited scope of police report",
      "k": {
        "2022": "RECOMMENDATION ISSUED",
        "2023": "RECOMMENDATION ISSUED",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Enforcement",
      "i": "Addressing gaps in beneficial ownership transparency",
      "k": {
        "2025": "MENTIONED"
      }
    },
    {
      "t": "Enforcement",
      "i": "Need for improved financial investigation and law enforcement capacities on transnational financial flows to address, increasing risks of strategic corruption",
      "k": {
        "2025": "MENTIONED"
      }
    },
    {
      "t": "Criminalisation",
      "i": "Legal reform to strengthen corporate criminal liability",
      "k": {
        "2022": "SOME PROGRESS",
        "2023": "SOME PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Criminalisation",
      "i": "Trading in influence/ influence peddling - federal level",
      "k": {
        "2023": "MENTIONED",
        "2024": "IMPLEMENTED"
      }
    },
    {
      "t": "Criminalisation",
      "i": "Need to extend the scope of the trading in influence provisions to elected officials on at the local level and other categories of public officials",
      "k": {
        "2025": "MENTIONED"
      }
    }
  ],
  "Bulgaria": [
    {
      "t": "Lobbying",
      "i": "Lobbying activities remain unregulated by law.",
      "k": {
        "2020": "MENTIONED",
        "2021": "NO PROGRESS",
        "2022": "SOME PROGRESS",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Limited evidence regarding effectiveness of integrity and conflict‑of‑interest controls.",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO PROGRESS",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Declaration systems operational but largely procedural and process‑heavy.",
      "k": {
        "2022": "MENTIONED",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Fragmented regulatory framework.",
      "k": {
        "2021": "MENTIONED",
        "2022": "SOME PROGRESS",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Serious gaps identified in integrity rules for top executive functions.",
      "k": {
        "2023": "MENTIONED",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Political Finance",
      "i": "Insuffiecient resources of the political finance oversight body",
      "k": {
        "2023": "MENTIONED",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Political Finance",
      "i": "Lack of clarity on the follow-up of allegations of criminal behaviour resulting from audits on political party financing",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Enforcement",
      "i": "Need for amendments to Criminal Code to improve efficiency of investigations and trials",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO FOLLOW-UP",
        "2023": "SOME PROGRESS",
        "2024": "SOME PROGRESS",
        "2025": "IMPLEMENTED"
      }
    },
    {
      "t": "Enforcement",
      "i": "Ineffective detection and prosecution of foreign bribery cases",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "Termination of corruption investigations without judicial review remains possible in some cases (Anticorruption Commission).",
      "k": {
        "2022": "MENTIONED",
        "2023": "SOME PROGRESS",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Enforcement",
      "i": "Lack of a solid track record of final convictions in high‑level corruption cases.",
      "k": {
        "2020": "MENTIONED",
        "2021": "NO PROGRESS",
        "2022": "NO PROGRESS",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    }
  ],
  "Ireland": [
    {
      "t": "Lobbying",
      "i": "Limited resources mean the Standards in Public Office Commission cannot proactively pursue non-compliance with post-employment restrictions",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO FOLLOW-UP",
        "2023": "NO FOLLOW-UP",
        "2024": "NO FOLLOW-UP",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Lobbying",
      "i": "Lack of powers for the Standards in Public Office Commission (SIPO) to monitor irregularities in post-employment/revolving doors restrictions",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO FOLLOW-UP",
        "2023": "NO FOLLOW-UP",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Lobbying",
      "i": "Requirement for statutory review of the Regulation of Lobbying Act 2015",
      "k": {
        "2022": "MENTIONED",
        "2023": "NO FOLLOW-UP",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Lobbying",
      "i": "No enforcement provisions  associated with post-employment provisions",
      "k": {
        "2022": "MENTIONED",
        "2023": "SOME PROGRESS",
        "2024": "IMPLEMENTED"
      }
    },
    {
      "t": "Lobbying",
      "i": "Need for sanctions for breaches of lobbying restrictions, including financial penalties and time-bound prohibitions on lobbying",
      "k": {
        "2022": "MENTIONED",
        "2023": "SOME PROGRESS",
        "2024": "IMPLEMENTED"
      }
    },
    {
      "t": "Lobbying",
      "i": "REC: Strengthen the existing ethics framework, including on revolving doors and lobbying",
      "k": {
        "2022": "MENTIONED / RECOMMENDATION ISSUED",
        "2023": "SOME PROGRESS / RECOMMENDATION ISSUED",
        "2024": "IMPLEMENTED"
      }
    },
    {
      "t": "Lobbying",
      "i": "REC: Strengthen the monitoring and enforcement capacity and powers of the Standards in Public Office Commission (SIPO) in relation to lobbying",
      "k": {
        "2022": "MENTIONED / RECOMMENDATION ISSUED",
        "2023": "SOME PROGRESS / RECOMMENDATION ISSUED",
        "2024": "SOME PROGRESS / RECOMMENDATION ISSUED",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Lobbying",
      "i": "Extend 2015 Act to lobbying by certain representative and issue-based bodies, including non-remunerated office-holders of such bodies",
      "k": {
        "2023": "MENTIONED",
        "2024": "IMPLEMENTED"
      }
    },
    {
      "t": "Lobbying",
      "i": "Cooling-off provisions only apply to lobbying and do not include a cooling-off period for designated public officials",
      "k": {
        "2023": "MENTIONED",
        "2024": "IMPLEMENTED"
      }
    },
    {
      "t": "Lobbying",
      "i": "Anti-avoidance provisions",
      "k": {
        "2024": "IMPLEMENTED"
      }
    },
    {
      "t": "Lobbying",
      "i": "Lobbying of senior officials in high-level bodies reported on same basis as for central and local government",
      "k": {
        "2025": "IMPLEMENTED"
      }
    },
    {
      "t": "Lobbying",
      "i": "Awareness raising for lobbyists and Designated Public Officials (DPOs)",
      "k": {
        "2025": "MENTIONED"
      }
    },
    {
      "t": "Lobbying",
      "i": "Extend cooling-off provisions",
      "k": {
        "2025": "IMPLEMENTED"
      }
    },
    {
      "t": "Lobbying",
      "i": "Some relevant agencies excluded from the scope of the Lobbying Register",
      "k": {
        "2025": "MENTIONED"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Disclosure of interests rules limited in scope - do not include liabilities and/or financial and economic involvements",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO PROGRESS",
        "2023": "SOME PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "SOME PROGRESS"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Only MPs are required to publicly disclose their interests and present annual statements to the Standards in Public Office Commission (SIPO)",
      "k": {
        "2021": "MENTIONED",
        "2022": "SOME PROGRESS",
        "2023": "NO PROGRESS",
        "2024": "SOME PROGRESS",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Standards in Public Office Commission (SIPO) has no remit to investigate office holders or civil servants after leaving office",
      "k": {
        "2021": "MENTIONED",
        "2022": "SOME PROGRESS",
        "2023": "NO FOLLOW-UP",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Enhance and harmonise the conflicts of interest framework based upon the lapsed Public Sector Standards Bill 2015",
      "k": {
        "2021": "MENTIONED / SOME PROGRESS",
        "2022": "SOME PROGRESS",
        "2023": "NO FOLLOW-UP",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Harmonise conflicts of interest rules across and between national and local government",
      "k": {
        "2022": "MENTIONED",
        "2023": "NO FOLLOW-UP",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Need to strengthen the legal obligations on public officials to disclose actual and potential conflicts of interest",
      "k": {
        "2022": "MENTIONED",
        "2023": "NO FOLLOW-UP",
        "2024": "SOME PROGRESS",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Strengthen and consolidate the legal framework to prevent conflicts of interest",
      "k": {
        "2022": "MENTIONED",
        "2023": "NO FOLLOW-UP",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "REC: Strengthen the existing ethics framework, including on asset declarations",
      "k": {
        "2022": "MENTIONED / RECOMMENDATION ISSUED",
        "2023": "SOME PROGRESS / RECOMMENDATION ISSUED",
        "2024": "NO PROGRESS / RECOMMENDATION ISSUED",
        "2025": "SOME PROGRESS / RECOMMENDATION ISSUED"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "REC: Strengthen the monitoring and enforcement capacity and powers of the Standards in Public Office Commission (SIPO) in relation to asset declarations",
      "k": {
        "2022": "MENTIONED / RECOMMENDATION ISSUED",
        "2023": "SOME PROGRESS / RECOMMENDATION ISSUED",
        "2024": "NO PROGRESS / RECOMMENDATION ISSUED",
        "2025": "SOME PROGRESS / RECOMMENDATION ISSUED"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "REC: Digitalise the asset declarations system to streamline periodic submissions interests statements for users, guarantee easier access for the Standards in Public Office Commission (SIPO) and civil society, and support improved complaints and investigations procedures",
      "k": {
        "2023": "MENTIONED / RECOMMENDATION ISSUED",
        "2024": "NO PROGRESS / RECOMMENDATION ISSUED",
        "2025": "SOME PROGRESS / RECOMMENDATION ISSUED"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Additional resources required for the Standards in Public Office Commission (SIPO) for any increased workload following legislative reform",
      "k": {
        "2023": "MENTIONED",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Political Finance",
      "i": "Comprehensive review of the regulatory framework for political party funding, as regulated by the Electoral Act 1997",
      "k": {
        "2023": "MENTIONED",
        "2024": "SOME PROGRESS",
        "2025": "SOME PROGRESS"
      }
    },
    {
      "t": "Political Finance",
      "i": "Need for modernisation and digitalisation of data collection on political party financing, including recording of election expenses and declarations of donations to political parties",
      "k": {
        "2023": "MENTIONED",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Political Finance",
      "i": "Question of whether the Electoral Commission should take over some functions from the Standards in Public Office Commission (SIPO) in relation to political party financing",
      "k": {
        "2025": "MENTIONED"
      }
    },
    {
      "t": "Enforcement",
      "i": "Limited resourcing for the Anti-Bribery & Corruption Unit (ABCU) of the Garda National Economic Crime Bureau (GNECB), which operates at limited capacity",
      "k": {
        "2020": "MENTIONED",
        "2021": "SOME PROGRESS",
        "2022": "NO PROGRESS",
        "2023": "SOME PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "Limited resources of the Standards in Public Office Commission (SIPO) in view of its wide remit",
      "k": {
        "2020": "MENTIONED",
        "2021": "NO FOLLOW-UP",
        "2022": "NO PROGRESS",
        "2023": "NO FOLLOW-UP",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Enforcement",
      "i": "Length, cost and inadmissability of evidence from Tribunals of Inquiry used for some high-level corruption cases",
      "k": {
        "2020": "MENTIONED",
        "2021": "NO FOLLOW-UP",
        "2022": "NO FOLLOW-UP",
        "2023": "NO FOLLOW-UP",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Enforcement",
      "i": "Inability of the Standards in Public Office Commission (SIPO) to appoint inquiry officer to conduct a preliminary inquiry launched on its own initiative (as opposed to following a complaint), creating a high threshold for launching full investigations on its own initiative",
      "k": {
        "2020": "MENTIONED",
        "2021": "NO FOLLOW-UP",
        "2022": "NO FOLLOW-UP",
        "2023": "NO FOLLOW-UP",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Enforcement",
      "i": "Full investigation hearing may only proceed when all six members of the Standards in Public Office Commission (SIPO) are present (rest of SIPO’s work can be pursued with a quorum of three members)",
      "k": {
        "2020": "MENTIONED",
        "2021": "NO FOLLOW-UP",
        "2022": "NO FOLLOW-UP",
        "2023": "NO FOLLOW-UP",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Enforcement",
      "i": "Limited resourcing for the Garda National Economic Crime Bureau (GNECB)",
      "k": {
        "2021": "MENTIONED",
        "2022": "SOME PROGRESS",
        "2023": "SOME PROGRESS",
        "2024": "SOME PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "Limited resourcing for the Office of the Director of Public Prosecutions (ODPP), including the Special Financial Crime Unit, to deal with bribery and corruption",
      "k": {
        "2020": "MENTIONED",
        "2021": "MENTIONED",
        "2022": "SOME PROGRESS",
        "2023": "SOME PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "Need for increased specialist capacity for the Office of the Director of Public Prosecutions (ODPP) to deal with complex financial crime, including digital forensics and forensic accounting",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO PROGRESS",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "Establish a permanent, cross-sectoral advisory council to coordinate and lead a holistic approach to economic crimes and corruption",
      "k": {
        "2021": "MENTIONED",
        "2022": "SOME PROGRESS",
        "2023": "IMPLEMENTED"
      }
    },
    {
      "t": "Enforcement",
      "i": "Develop a multi-annual strategy and accompanying action plan for combating economic crime and corruption",
      "k": {
        "2021": "MENTIONED",
        "2022": "SOME PROGRESS",
        "2023": "SOME PROGRESS",
        "2024": "SOME PROGRESS",
        "2025": "SOME PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "The collection, examination and analysis of high volumes of digital data and electronic evidence (including from mobile phones, computers, cloud storage and social networks) poses challenges for prosecutors and investigators in corruption cases",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO FOLLOW-UP",
        "2023": "NO FOLLOW-UP",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "Need to address public procurement as a high-risk area for bribery, fraud and corruption",
      "k": {
        "2021": "MENTIONED",
        "2022": "SOME PROGRESS",
        "2023": "SOME PROGRESS",
        "2024": "SOME PROGRESS",
        "2025": "SOME PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "REC: Strengthen the existing ethics framework, in particular the monitoring and enforcement capacity of the Standards in Public Office Commission (SIPO), including its investigative capacity and enforcement powers",
      "k": {
        "2022": "MENTIONED / RECOMMENDATION ISSUED",
        "2023": "SOME PROGRESS / RECOMMENDATION ISSUED",
        "2024": "SOME PROGRESS / RECOMMENDATION ISSUED",
        "2025": "SOME PROGRESS / RECOMMENDATION ISSUED"
      }
    },
    {
      "t": "Enforcement",
      "i": "Establish a permanent Economic Crime Forum of senior representatives from investigatory agencies to enhance cooperation and information exchange on corruption",
      "k": {
        "2022": "MENTIONED",
        "2023": "IMPLEMENTED"
      }
    },
    {
      "t": "Enforcement",
      "i": "The Garda Anti-Corruption Unit (GACU) follows-up on recommendations of the Garda Síochána Inspectorate Report of 2020 on internal corruption within the police, including building trust among police officers, developing better internal anti-corruption policies and delivering an updated learning programme and briefings",
      "k": {
        "2023": "MENTIONED",
        "2024": "SOME PROGRESS",
        "2025": "SOME PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "The Advisory Council on Economic Crime and Corruption does not include representation from civil society bodies focused on integrity and anti-corruption",
      "k": {
        "2023": "MENTIONED",
        "2024": "NO PROGRESS",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Enforcement",
      "i": "Reform of the framework for independent ombudsman investigations into complaints about the police",
      "k": {
        "2023": "MENTIONED",
        "2024": "SOME PROGRESS",
        "2025": "SOME PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "Difficulties in collaboration and information-sharing between the Garda National Economic Crime Bureau (GNECB) and the Corporate Enforcement Authority (CEA) due to privacy constraints",
      "k": {
        "2023": "MENTIONED",
        "2024": "SOME PROGRESS",
        "2025": "SOME PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "Difficulties in cooperation between Irish authorities and the European Public Prosecutors Office (EPPO) due to legal constraints",
      "k": {
        "2023": "MENTIONED",
        "2024": "SOME PROGRESS",
        "2025": "IMPLEMENTED"
      }
    },
    {
      "t": "Enforcement",
      "i": "Difficulties for police investigating foreign bribery due to lack of cooperation through Mutual Legal Assistance (MLA), in particular the gathering of evidence from third countries which would be admissible in Irish courts",
      "k": {
        "2023": "MENTIONED",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "Insufficient number of forensic accountants assigned to the Garda National Economic Crime Bureau (GNECB)",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "Inability of the Garda National Economic Crime Bureau (GNECB) to deliver training on economic crime and corruption due to resourcing limitations",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "Need to establish requirement for annual report on the implementation of the National Strategy to Combat Economic Crime and Corruption, once it is published",
      "k": {
        "2025": "MENTIONED"
      }
    },
    {
      "t": "Enforcement",
      "i": "Need for Ireland to join the European Public Prosecutors Office (EPPO)",
      "k": {
        "2025": "MENTIONED"
      }
    },
    {
      "t": "Criminalisation",
      "i": "Revision of the law on criminal procedure to increase the efficiency of dealing with complex criminal offences such as white-collar crimes, including preliminary trial hearings to prepare parties ahead of trial",
      "k": {
        "2020": "MENTIONED",
        "2021": "SOME PROGRESS",
        "2022": "IMPLEMENTED"
      }
    },
    {
      "t": "Criminalisation",
      "i": "Reform of previous anti-corruption laws, including failure to report provisions on bribery and corruption",
      "k": {
        "2021": "IMPLEMENTED"
      }
    },
    {
      "t": "Criminalisation",
      "i": "Reform of previous anti-corruption laws, including foreign bribery and extraterritorial reach if the relevant conduct would be an offence if committed in Ireland",
      "k": {
        "2021": "IMPLEMENTED"
      }
    },
    {
      "t": "Criminalisation",
      "i": "Strengthening the law on public sector ethics to address breaches of ethics obligations by former parliamentarians",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO PROGRESS",
        "2023": "NO FOLLOW-UP",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Criminalisation",
      "i": "Provide legal solutions to cases of misconduct in public office, including by former parliamentarians",
      "k": {
        "2021": "MENTIONED",
        "2022": "SOME PROGRESS",
        "2023": "NO FOLLOW-UP",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Criminalisation",
      "i": "Amending criminal justice legislation to allow for standalone search warrants to allow police to demand passwords to electronic devices owned or controlled by persons subject to arrest warrants",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO FOLLOW-UP",
        "2023": "NO FOLLOW-UP",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Criminalisation",
      "i": "REC: Strengthen the existing ethics framework, based upon the lapsed Public Sector Standards Bill 2015, including a uniform and consolidated values-based normative framework",
      "k": {
        "2021": "MENTIONED",
        "2022": "SOME PROGRESS / RECOMMENDATION ISSUED",
        "2023": "SOME PROGRESS / RECOMMENDATION ISSUED",
        "2024": "SOME PROGRESS / RECOMMENDATION ISSUED",
        "2025": "SOME PROGRESS / RECOMMENDATION ISSUED"
      }
    },
    {
      "t": "Criminalisation",
      "i": "Need to include and criminalise bid-rigging offences in competition law and public procurement rules",
      "k": {
        "2022": "MENTIONED",
        "2023": "IMPLEMENTED"
      }
    },
    {
      "t": "Criminalisation",
      "i": "New law to strengthen the governance, oversight and accountability of the national police service",
      "k": {
        "2023": "MENTIONED",
        "2024": "IMPLEMENTED"
      }
    },
    {
      "t": "Criminalisation",
      "i": "Lack of legislation providing for plea deals linked to foreign bribery means that reporting of foreign bribery involving companies operating in Ireland predominantly takes place in jurisdictions that allow such plea deals, i.e. US and UK",
      "k": {
        "2023": "MENTIONED",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Criminalisation",
      "i": "Legislative and other measures to address corruption risks in high-risk sectors (planning and development; public and private procurement, public utilities and natural resources, match-fixing and the financial sector)",
      "k": {
        "2025": "MENTIONED / SOME PROGRESS"
      }
    }
  ],
  "Italy": [
    {
      "t": "Lobbying",
      "i": "No comprehensive regulation on lobbying (lobbying regulation fragmented)",
      "k": {
        "2020": "MENTIONED",
        "2021": "SOME PROGRESS",
        "2022": "SOME PROGRESS / RECOMMENDATION ISSUED",
        "2023": "SOME PROGRESS / RECOMMENDATION ISSUED",
        "2024": "NO PROGRESS / RECOMMENDATION ISSUED",
        "2025": "SOME PROGRESS / RECOMMENDATION ISSUED"
      }
    },
    {
      "t": "Lobbying",
      "i": "Lack of operational lobbying register",
      "k": {
        "2021": "MENTIONED",
        "2022": "SOME PROGRESS / RECOMMENDATION ISSUED",
        "2023": "SOME PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Lobbying",
      "i": "Lack of legislative footprint",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO PROGRESS / RECOMMENDATION ISSUED",
        "2023": "SOME PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "SOME PROGRESS"
      }
    },
    {
      "t": "Lobbying",
      "i": "Need of precise legal definition of lobbyist",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Lobbying",
      "i": "The provisions on revolving doors are provided only for public officials, and not to the holders of political offices",
      "k": {
        "2020": "MENTIONED",
        "2021": "NO FOLLOW-UP",
        "2022": "SOME PROGRESS",
        "2023": "NO FOLLOW-UP",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Lobbying",
      "i": "Lack of provisions for disclosure requirements applying to decision makers and public officials",
      "k": {
        "2020": "MENTIONED",
        "2021": "SOME PROGRESS",
        "2022": "NO FOLLOW-UP",
        "2023": "NO FOLLOW-UP",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Legislation on conflicts of interests is fragmented, with limited measures for members of national, regional and local government offices",
      "k": {
        "2020": "MENTIONED",
        "2021": "SOME PROGRESS",
        "2022": "NO PROGRESS",
        "2023": "SOME PROGRESS",
        "2024": "SOME PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Lack of comprehensive legislation on conflicts of interests",
      "k": {
        "2021": "SOME PROGRESS",
        "2022": "NO PROGRESS / RECOMMENDATION ISSUED",
        "2023": "SOME PROGRESS / RECOMMENDATION ISSUED",
        "2024": "SOME PROGRESS / RECOMMENDATION ISSUED",
        "2025": "SOME PROGRESS / RECOMMENDATION ISSUED"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "A fragmented ineligibility and incompatibility framework for elected officials, lacking a comprehensive enforcement system",
      "k": {
        "2020": "MENTIONED",
        "2021": "SOME PROGRESS",
        "2022": "NO PROGRESS",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Need for general definition of conflicts of interests",
      "k": {
        "2022": "MENTIONED",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Lack of formalised Code of Conduct for ethics for parliamentarians",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO PROGRESS",
        "2023": "SOME PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "The publication of asset declarations for members of the Chamber of Deputies and the Senate, as well as for members of the Government and senior civil servants, is fragmented and non-transparent",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO PROGRESS",
        "2023": "NO PROGRESS",
        "2024": "NO FOLLOW-UP",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Lack of the comrehensiveness of the draft law (scope limited)",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Need to prohibit to holders of public office receiving payments from foreign states",
      "k": {
        "2023": "MENTIONED / SOME PROGRESS",
        "2024": "SOME PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Lack of consistency of the measures for asset declarations applied to top ministerial officials, their staff members and advisers, and on the usability of the published declarations filed by members of Parliament",
      "k": {
        "2025": "MENTIONED"
      }
    },
    {
      "t": "Political Finance",
      "i": "Significant reliance/dependency of political parties on private donations",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO PROGRESS",
        "2023": "SOME PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Political Finance",
      "i": "Lack of capacities and resources of the oversight and supervisory bodies",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO PROGRESS",
        "2023": "SOME PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "SOME PROGRESS"
      }
    },
    {
      "t": "Political Finance",
      "i": "Practice of channeling political donations through political foundations and associations (objuscating the primary source)",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO PROGRESS / RECOMMENDATION ISSUED",
        "2023": "NO PROGRESS / RECOMMENDATION ISSUED",
        "2024": "NO PROGRESS / RECOMMENDATION ISSUED",
        "2025": "NO PROGRESS / RECOMMENDATION ISSUED"
      }
    },
    {
      "t": "Political Finance",
      "i": "Relatively high ceiling for direct private donations",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO PROGRESS",
        "2023": "SOME PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Political Finance",
      "i": "Lack of centralised, single, machine-readable register to ensure that information is published in coherent, understandable, and timely manner",
      "k": {
        "2022": "MENTIONED / RECOMMENDATION ISSUED",
        "2023": "NO PROGRESS / RECOMMENDATION ISSUED",
        "2024": "NO PROGRESS / RECOMMENDATION ISSUED",
        "2025": "NO FOLLOW-UP / RECOMMENDATION ISSUED"
      }
    },
    {
      "t": "Political Finance",
      "i": "Publicly available information on political finance lacks consistent structure and formats",
      "k": {
        "2022": "MENTIONED",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Political Finance",
      "i": "Need to increase autonomy of the Committee for Transparency and Control of Political Parties and Political Movements",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Political Finance",
      "i": "Need to consolidate and strenghthen existing rules on political parties and their financing",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "Need to enhance digitalisation and interconnection of various registries",
      "k": {
        "2022": "MENTIONED / RECOMMENDATION ISSUED",
        "2023": "SOME PROGRESS",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Enforcement",
      "i": "Lack of resources and limited experience and legal expertise affect the capacity of law enforcement authorities to pursue and prosecute foreign bribery effectively",
      "k": {
        "2021": "MENTIONED / SOME PROGRESS",
        "2022": "NO PROGRESS",
        "2023": "NO PROGRESS",
        "2024": "NO FOLLOW-UP",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "Excessive disposition times (trial length)",
      "k": {
        "2021": "MENTIONED / SOME PROGRESS",
        "2022": "SOME PROGRESS",
        "2023": "SOME PROGRESS",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Enforcement",
      "i": "Lack of operational Ultimate Beneficial Ownership register",
      "k": {
        "2023": "MENTIONED / SOME PROGRESS",
        "2024": "NO FOLLOW-UP",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "Need for up-to-date statistics on investigations of corruption by the police as well as on prosecutions and convictions by the courts",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO FOLLOW-UP",
        "2023": "NO FOLLOW-UP",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Enforcement",
      "i": "Draft law to reform the Court of Auditors may weaken the anticorruption enforcement",
      "k": {
        "2025": "MENTIONED / NO PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "Need for improved integrity measures for police force",
      "k": {
        "2025": "MENTIONED / SOME PROGRESS"
      }
    },
    {
      "t": "Criminalisation",
      "i": "Attempts to abrogate the offence of abuse of office",
      "k": {
        "2023": "MENTIONED",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Criminalisation",
      "i": "Attempts to limit of the scope of the offence of the trading in influence",
      "k": {
        "2023": "MENTIONED",
        "2024": "NO PROGRESS",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Criminalisation",
      "i": "Draft law proposing changes to the statute of limitation periods would reduce the time available to conduct proceedings for criminal offences",
      "k": {
        "2023": "MENTIONED",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    }
  ],
  "Hungary": [
    {
      "t": "Lobbying",
      "i": "Regulation of lobbying in Hungary is incomplete",
      "k": {
        "2020": "MENTIONED",
        "2021": "NO PROGRESS",
        "2022": "NO PROGRESS / RECOMMENDATION ISSUED",
        "2023": "NO PROGRESS / RECOMMENDATION ISSUED",
        "2024": "NO PROGRESS / RECOMMENDATION ISSUED",
        "2025": "NO PROGRESS / RECOMMENDATION ISSUED"
      }
    },
    {
      "t": "Lobbying",
      "i": "No mandatory registration of lobbyists and disclosure of contact reports.",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO PROGRESS",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Lobbying",
      "i": "No rules on the interaction with lobbyists as regards members of Parliament",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO PROGRESS",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Lobbying",
      "i": "No steps taken to prepare the code of conduct for persons in top executive functions, planned by 30 April 2024",
      "k": {
        "2025": "MENTIONED"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "The verification of assets and interests declarations lacks systematic checks and independent oversight.",
      "k": {
        "2020": "MENTIONED",
        "2021": "NO PROGRESS",
        "2022": "NO PROGRESS / RECOMMENDATION ISSUED",
        "2023": "SOME PROGRESS / RECOMMENDATION ISSUED",
        "2024": "NO PROGRESS / RECOMMENDATION ISSUED",
        "2025": "NO PROGRESS / RECOMMENDATION ISSUED"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Implementation of GRECO recomendation relating to the issue of effective supervision and enforcement of rules of conduct, conflict of interests and asset declarations for members of Parliament is pending",
      "k": {
        "2020": "MENTIONED",
        "2021": "SOME PROGRESS",
        "2022": "NO FOLLOW-UP",
        "2023": "NO FOLLOW-UP",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Lack of publicly available information on the outcomes of self-declared conflicts of interest by Members of Parliament",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO FOLLOW-UP",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Post-employment rules and cooling-off periods are fragmented and apply only to a small group of public officials",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO PROGRESS",
        "2023": "NO PROGRESS",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Members of the Government, state secretaries, or members of Parliament are not subject to codes of ethics",
      "k": {
        "2022": "MENTIONED",
        "2023": "NO PROGRESS",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "No general conflict of interest rules in place for political advisors and ministerial or government commissioners",
      "k": {
        "2023": "MENTIONED",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Lack of preventive measures for \"revolving doors\", although confidentiality clauses are applied, they do not specify any cooling off period",
      "k": {
        "2020": "MENTIONED",
        "2021": "NO PROGRESS",
        "2022": "NO PROGRESS",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Political Finance",
      "i": "The sources of party income and the length of election campaign periods lack clarity",
      "k": {
        "2020": "MENTIONED",
        "2021": "NO PROGRESS",
        "2022": "NO PROGRESS",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Political Finance",
      "i": "Lack of monitoring mechanisms for political parties receiving state subsidies",
      "k": {
        "2020": "MENTIONED",
        "2021": "NO FOLLOW-UP",
        "2022": "NO FOLLOW-UP",
        "2023": "NO FOLLOW-UP",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Political Finance",
      "i": "Political advertising on social media, including third-party-funded ads, falls outside the legal definition of political advertising and therefore unaudited",
      "k": {
        "2022": "MENTIONED",
        "2023": "NO FOLLOW-UP",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Political Finance",
      "i": "Campaign activities conducted outside the official 50-day pre-election period are not covered by law",
      "k": {
        "2023": "MENTIONED",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Political Finance",
      "i": "Loopholes allowing campaign spending limits to be circumvented through third parties and intermediaries, remain unaddressed.",
      "k": {
        "2022": "MENTIONED",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Political Finance",
      "i": "Cap on political campaign expenses removed",
      "k": {
        "2025": "MENTIONED"
      }
    },
    {
      "t": "Enforcement",
      "i": "No new investigations into foreign bribery",
      "k": {
        "2022": "MENTIONED",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "Prosecution of high-level corruption (including government officials or their immediate circle) remains very limited",
      "k": {
        "2020": "MENTIONED",
        "2021": "SOME PROGRESS",
        "2022": "NO PROGRESS",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "independent control mechanisms remain insufficient for detecting corruption",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO PROGRESS",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "Lack of full implementation of the GRECO recommendations as regards the effective functioning of the prosecution",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO PROGRESS",
        "2023": "NO FOLLOW-UP",
        "2024": "NO PROGRESS",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Enforcement",
      "i": "risk of low accountability, in view of the lack of judicial review for prosecutorial decisions not to investigate and prosecute corruption allegations",
      "k": {
        "2022": "MENTIONED",
        "2023": "NO FOLLOW-UP",
        "2024": "SOME PROGRESS",
        "2025": "SOME PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "Risks of clientelism, favouritism and nepotism in high-level public administration remain unaddressed",
      "k": {
        "2022": "MENTIONED",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "Risk of impunity caused by a disparity in the treatment of corruption cases for political purposes, which potentially breaches the principle of equality before the law",
      "k": {
        "2023": "MENTIONED",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Enforcement",
      "i": "The risk of undue interference with individual cases persists in the prosecution service, while also the police’s operational independence appears to be affected by political influence on the prosecution service.",
      "k": {
        "2020": "MENTIONED",
        "2021": "NO PROGRESS",
        "2022": "NO PROGRESS",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "Information or data about reliability testing, including numbers of corruption suspicions reported to the prosecution service, is no longer publicly available for those public officials who are covered by the mandate of the Constitution Protection Office.",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "Lengthy court proceedings for high level corruption cases",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Criminalisation",
      "i": "Definition of ‘foreign public official’ does not include officials of foreign public enterprises",
      "k": {
        "2020": "MENTIONED",
        "2021": "IMPLEMENTED"
      }
    },
    {
      "t": "Criminalisation",
      "i": "Legislation allows reducing or entirely dropping criminal sanctions for Corruption-related offences in certain circumstances.",
      "k": {
        "2022": "MENTIONED",
        "2023": "SOME PROGRESS"
      }
    }
  ],
  "Netherlands": [
    {
      "t": "Lobbying",
      "i": "Limited lobby register, volunteer basis for lobbyist in place with the parliament",
      "k": {
        "2021": "MENTIONED",
        "2022": "SOME PROGRESS",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Lobbying",
      "i": "Lack of enforcement and monitoring vis-a-vis contact between lobyists and office holders or civil servants",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO FOLLOW-UP",
        "2023": "NO FOLLOW-UP",
        "2024": "NO PROGRESS",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Lobbying",
      "i": "Establish stricter transparency rules on lobbying for members of government and parliament",
      "k": {
        "2023": "MENTIONED / RECOMMENDATION ISSUED",
        "2024": "SOME PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Lobbying",
      "i": "Lack of legislative footprint",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Lobbying",
      "i": "Lack of Lobbying transparency register",
      "k": {
        "2025": "MENTIONED"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Code of conduct for the House of representatives",
      "k": {
        "2020": "MENTIONED",
        "2021": "IMPLEMENTED"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Gaps in integrity framework for persons with top executive functions",
      "k": {
        "2020": "MENTIONED",
        "2021": "NO PROGRESS",
        "2022": "NO PROGRESS",
        "2023": "NO FOLLOW-UP",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Limited post-employment rules for persons with top-exeecutive functions",
      "k": {
        "2020": "MENTIONED",
        "2021": "NO PROGRESS",
        "2022": "NO PROGRESS",
        "2023": "NO FOLLOW-UP",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Further strengthening of integrity at the local level",
      "k": {
        "2022": "MENTIONED",
        "2023": "NO FOLLOW-UP",
        "2024": "NO FOLLOW-UP",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Lack of implementation of code of conduct for members of cabinet",
      "k": {
        "2022": "MENTIONED / RECOMMENDATION ISSUED",
        "2023": "SOME PROGRESS",
        "2024": "SOME PROGRESS",
        "2025": "SOME PROGRESS"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Complete the revision of the rules regulating revolving doors",
      "k": {
        "2022": "MENTIONED / RECOMMENDATION ISSUED",
        "2023": "SOME PROGRESS",
        "2024": "SOME PROGRESS",
        "2025": "RECOMMENDATION IMPLEMENTED"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Problems vis-a-vis asset and ineterest disclosure for MPs and cabinet members",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Lack of an effective enforcement mechanism to ensure integrity rules are followed within parliament",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Vagueness in the Parliament's integrity guideliness",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Agendas of members of cabinet not consistently published",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Political Finance",
      "i": "Limited restrictions on political party financing",
      "k": {
        "2020": "MENTIONED",
        "2021": "NO PROGRESS",
        "2022": "NO PROGRESS",
        "2023": "SOME PROGRESS",
        "2024": "SOME PROGRESS",
        "2025": "SOME PROGRESS"
      }
    },
    {
      "t": "Political Finance",
      "i": "Lacking legal framework with regard to financing local and regional parties",
      "k": {
        "2020": "MENTIONED",
        "2021": "NO PROGRESS",
        "2022": "NO PROGRESS",
        "2023": "SOME PROGRESS",
        "2024": "SOME PROGRESS",
        "2025": "SOME PROGRESS"
      }
    },
    {
      "t": "Political Finance",
      "i": "Lacking framework vis-a-vis the registration of donatations to political parties",
      "k": {
        "2020": "MENTIONED",
        "2021": "NO PROGRESS",
        "2022": "NO PROGRESS",
        "2023": "SOME PROGRESS",
        "2024": "SOME PROGRESS",
        "2025": "SOME PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "Lengthy or inefficient procedures with the whistleblower authority",
      "k": {
        "2020": "MENTIONED",
        "2021": "NO FOLLOW-UP",
        "2022": "NO PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "Limited progress in the fight against corruption within law enforcement",
      "k": {
        "2020": "MENTIONED",
        "2021": "NO FOLLOW-UP",
        "2022": "NO PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "No continuous vetting of law enforcement officers throughout their carreer",
      "k": {
        "2020": "MENTIONED",
        "2021": "SOME PROGRESS",
        "2022": "SOME PROGRESS",
        "2023": "SOME PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "Lacking legal protections for whistleblowers",
      "k": {
        "2021": "MENTIONED",
        "2022": "NO PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "Combatting subversive and organised crime, inlcuding corruption",
      "k": {
        "2021": "MENTIONED",
        "2022": "SOME PROGRESS",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "Progress on the transposition of the EU whistleblower protection directive",
      "k": {
        "2022": "MENTIONED"
      }
    },
    {
      "t": "Enforcement",
      "i": "Lack of centralised anti-corruption strategy",
      "k": {
        "2022": "MENTIONED",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "SOME PROGRESS"
      }
    },
    {
      "t": "Criminalisation",
      "i": "No prohibition on trading influence despite independent reviews pointing to neccesary legal revision",
      "k": {
        "2022": "MENTIONED",
        "2023": "NO PROGRESS",
        "2024": "NO PROGRESS",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Criminalisation",
      "i": "Investigation and prosecution of foreign bribery cases facing difficulties",
      "k": {
        "2022": "MENTIONED",
        "2023": "NO PROGRESS",
        "2024": "SOME PROGRESS",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Criminalisation",
      "i": "Legal obstructions for use of large datasets for the detection of foreign bribery",
      "k": {
        "2023": "MENTIONED",
        "2024": "SOME PROGRESS",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Criminalisation",
      "i": "Lack of central anti-corruption agency",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Criminalisation",
      "i": "Work on the implementation of the EU anti-corruption directive",
      "k": {
        "2025": "MENTIONED"
      }
    },
    {
      "t": "Criminalisation",
      "i": "Entry into force of legislation with regard to self-monitoring and self-reporting of economic crimes (including foreign bribery)",
      "k": {
        "2025": "MENTIONED"
      }
    }
  ],
  "Serbia": [
    {
      "t": "Lobbying",
      "i": "The legal definition of lobbying is overly narrow, recognizing only formal written contacts with persons holding top executive functions.",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Lobbying",
      "i": "Records on lobbying contacts and annual report of lobbyists are not made public",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "The definition of public official set out in the Law ommits certain individuals with potentially high influence, such as advisors to the president, prime-minister and ministers and heads of cabinets",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Sanctions for non-compliance are uncommon",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "The human and technical resources of the Agency are too limited to carry out its corruption prevention tasks in a comprehensive manner",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "The advance publishing of the annual verification plan by the Agency for the Prevention of Corruption, informing which category of public officials will be subject to substantive checks in the respective year, risks limiting its effectiveness in practice",
      "k": {
        "2025": "MENTIONED"
      }
    },
    {
      "t": "Conflict of Interest",
      "i": "Shortcomings exist, in particular with regard to the law’s personal scope, as the rules do not extend to all high-ranking public officials who are particularly vulnerable to corruption.",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Political Finance",
      "i": "Absence of a campaign expenditure limits",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Political Finance",
      "i": "lack of rules on campaigning by third parties",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Political Finance",
      "i": "Lacking effectiveness of the oversight mechanism",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Political Finance",
      "i": "The criminal code lacks the provisions needed to effectively criminalize offences related to the illicit financing of political entities.",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Political Finance",
      "i": "Delays in the issueance of deciosion in response to suspicions of misuse of public resources",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Enforcement",
      "i": "Specialised departments for combating corruption are understaffed",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Enforcement",
      "i": "Challenges in establishing a robust track record of investigations, indictments and final convictions in high-level corruption cases, including the seizure and confiscation of criminal assets.",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "Proactive financial investigations are not common practice, limiting both effective asset recovery and the ability to gather evidence of unexplained wealth.",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO FOLLOW-UP"
      }
    },
    {
      "t": "Enforcement",
      "i": "The Prosecutor’s Office for Organised Crime, which has jurisdiction over high-level corruption cases, remains understaffed",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "Insufficient transparency in the prosecution service and weak oversight of dismissed corruption cases, and delays continued to affect public trust and accountability",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "There is risk of politically motivated interference into high-level corruption investigations and prosecutions although new safeguards have been introduced",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Enforcement",
      "i": "The specialised organised crime unit in the police investigating high-level corruption offences lacks sufficient staff.",
      "k": {
        "2025": "MENTIONED"
      }
    },
    {
      "t": "Criminalisation",
      "i": "Illicit enrichment is not criminalised.",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Criminalisation",
      "i": "Serbia is not a signatory party to the OECD Anti-Bribery Convention",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO PROGRESS"
      }
    },
    {
      "t": "Criminalisation",
      "i": "The role and mandate of the Prosecutor’s Office for Organised Crime is insufficiently regulated in the law.",
      "k": {
        "2024": "MENTIONED",
        "2025": "NO PROGRESS"
      }
    }
  ]
};
