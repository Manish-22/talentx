import React from 'react';
import ReactDOM from 'react-dom';
import './Articles.css';

        
        
class Article extends React.Component {
    constructor(props) {
      super(props);
      this.state = { username: '' };
    }
    myChangeHandler = (event) => {
      this.setState({username: event.target.value});
    }
    render() {
      return (
        <form action="site.php" method="GET">
        <h2 id="header1">ARTICLE:</h2> 
        <div>
        <input Id="text" name="name" onChange={this.myChangeHandler} ></input>
        </div>
        <p id = "para">
        <h3>{this.state.username}</h3>
        <br></br>
        <br></br>
        1. CORE
        Core is a multidisciplinary aggregator of open access research. It allows users to search more than 66 million open access articles.
        While most of these link to the full-text article on the original publisher's site, five million records are hosted directly on CORE.
        In addition to a straightforward keyword search, CORE offers advanced search options to filter results by publication type, year, language, journal, repository, and author.<br/><br/>

        2. ScienceOpen
         Functioning as a research and publishing network, ScienceOpen offers open access to more than 28 million articles in all areas of science.
         Although you do need to register to view the full text of the articles, registration is free. 
         The advanced search function is highly detailed, allowing you to find precisely the research you're looking for.
        The Berlin- and Boston-based company was founded in 2013 with the goal to "facilitate open and public communications between academics and to allow ideas to be judged on their merit, regardless of where they come from."<br/><br/>

        3. Directory of Open Access Journals
        Directory of Open Access JournalsA multidisciplinary, community-curated directory, the Directory of Open Access Journals (DOAJ) gives researchers access to high-quality, peer-reviewed journals.
        It has archived more than two million articles from 9,519 journals, allowing you to either browse by subject or search by keyword.
        The site was launched in 2003 with the aim of increasing the visibility of open access scholarly journals. Content on the site covers subjects from science to law to fine arts and everything in between.<br/><br/>

        4. Education Resources Information Center
        ERICThe Education Resources Information Center (ERIC), of the Institution of Education Sciences, allows you to search by topic for material related to the field of education.
        Links lead to other sites, where you may have to purchase the information, but you can search for full-text articles only.
        The service primarily indexes journals, grey literature (such as technical reports, white papers, and government documents), and books. All sources of material on ERIC go through a formal review process prior to being indexed.<br/><br/>

        5. arXiv e-Print Archive
        The arXiv e-Print Archive has been around since 1991 and is a well-known resource in the fields of mathematics and computer science.
        It is run by Cornell University Library and now offers open access to more than one million e-prints.<br/><br/>

        6. Social Science Research Network
        The Social Science Research Network (SSRN) is a collection of papers from the social sciences community. 
        The site offers more than 700,000 abstracts and more than 600,000 full-text papers.
        There is not yet a specific option to search for only full-text articles, but because most of the papers on the site are free access, it is not often that you encounter a paywall.
        You must become a member to use the services, but registration is free and enables you to interact with other scholars around the world.<br/><br/>

        7. Public Library of Science
        PLOSPublic Library of Science (PLOS) is a big player in the world of open access science. Publishing seven open access journals, the nonprofit organization is committed to facilitating openness in academic research.
        According to the site, "all PLOS content is at the highest possible level of open access, meaning that scientific articles are immediately and freely available to anyone, anywhere."<br/><br/>

        8. OpenDOAR
        OpenDOAR, or the Directory of Open Access Repositories, is a comprehensive resource for finding open access journals and articles.
        Using Google Custom Search, OpenDOAR combs through open access repositories around the world and returns relevant research in all disciplines.
         The repositories it searches through are assessed and categorized by OpenDOAR staff to ensure they meet quality standards.<br/><br/>

        9. Bielefeld Academic Search Engine
        BASEThe Bielefeld Academic Search Engine (BASE) is operated by the Bielefeld University Library in Germany, and it offers more than 100 million documents from more than 4,000 sources.
        Sixty percent of its content is open access, and you can filter your search accordingly.<br/><br/>

        10. Digital Library of the Commons Repository
        Run by Indiana University, the Digital Library of the Commons (DLC) Repository is a multidisciplinary journal repository that allows users to check thousands of free and open access articles from around the world.
        You can browse by document type, date, author, title, and more or search for keywords relevant to your topic.<br/><br/>

        11. CIA World Factbook
        The CIA World Factbook is a little different from the other resources on this list in that it is not an online journal directory or repository.
        It is, however, a highly useful research database for academics in a variety of disciplines. All the information is free to access, 
        and it provides facts about every country in the world, including information about history, geography, transportation, and much more.<br/><br/>

        12. Paperity
        PaperityPaperity boasts being the "first multidisciplinary aggregator of open access journals and papers." Their focus is helping you avoid paywalls while connecting you to authoritative research.
        In addition to providing readers with easy access to thousands of journals, Paperity seeks to help authors reach their audiences and help journals raise exposure to boost readership.<br/><br/>

        13. dblp Computer Science Bibliography
        dblpThe dblp Computer Science Bibliography is an online index of major computer science publications. Although it provides access to both free access articles and those behind a paywall,
        you can limit your search to only full-text articles. The site indexes more than three million publications, making it an invaluable resource in the world of computer science.<br/><br/>

        14. EconBiz
        EconBiz is a great resource for economic and business studies. A service of the Leibniz Information Centre for Economics, it offers access to full texts online, with the option of searching for open access material only.
        Don't forget to download the full list of 101 free online journal and research databases.<br/><br/>

        15. BioMed Central
        BioMed CentralBioMed Central provides open access research from more than 290 peer-reviewed journals in the fields of biology, clinical medicine, and health.
        You can browse these journals by subject or title, or you can search all articles for your required keyword.<br/><br/>

        16. JURN
        A multidisciplinary search engine, JURN provides you with links to various scholarly websites, articles, and journals that are all free access or open access.
        Specifically covering the fields of the arts, humanities, business, law, nature, science, and medicine, JURN has indexed almost 5,000 repositories to help you find exactly what you're looking for.<br/><br/>

        17. Dryad
        DryadDryad is a digital repository of curated, open access scientific research. It is run by a not-for-profit membership organization that aims to "promote a world where research data is openly available,
        integrated with the scholarly literature, and routinely reused to create knowledge." It is free to access, but note that there is a publishing charge associated if you wish to publish your data in Dryad.<br/><br/>

        18. EThOS
        Run by the British Library, EThOS allows you to search over 400,000 doctoral theses in a variety of disciplines. Although some full texts are behind paywalls, 
        you can limit your search to items available for immediate download, either directly through EThOS or through an institution's website.<br/><br/>

        19. PubMed
        PubMed, of the National Center for Biotechnology Information, is a very well-known research platform in the fields of science and medicine.
        It offers access to "more than 26 million citations for biomedical literature from MEDLINE, life science journals, and online books."
        While many resources are behind paywalls, you can filter your search to view free full texts only, making this an even more valuable resource.<br/><br/>

        20. Semantic Scholar
        Semantic ScholarA unique and easy-to-use resource, Semantic Scholar harnesses the power of artificial intelligence to efficiently sort through millions of science-related papers based on your search terms.
        According to the site, although some articles are behind paywalls, "the data [they] have for those articles is limited," so you can expect to receive mostly full-text results.
        Another feature is the extensive advanced search options, which allow you to search by cell type and brain region, among other things.<br/><br/>

        21. Zenodo
        ZenodoTaking its name from Zenodotus, the first librarian of the ancient library of Alexandria, Zenodo is a tool that was "built and developed by researchers,
        to ensure that everyone can join in open science." You can sort by keyword, title, journal, and more and download open access documents directly from the site.</p>
        
        
        </form>
      );
    }
  }
  
  ReactDOM.render(<Article />, document.getElementById('root'));

export default Article;