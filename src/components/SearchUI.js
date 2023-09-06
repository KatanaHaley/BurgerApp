import React from 'react'
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";

import {
  ErrorBoundary,
  Facet,
  SearchProvider,
  SearchBox,
  Results,
  PagingInfo,
  ResultsPerPage,
  Paging,
  Sorting,
  WithSearch
} from "@elastic/react-search-ui";
import { Layout } from "@elastic/react-search-ui-views";
import "@elastic/react-search-ui-views/lib/styles/styles.css";

import {
  buildAutocompleteQueryConfig,
  buildFacetConfigFromConfig,
  buildSearchOptionsFromConfig,
  buildSortOptionsFromConfig,
  getConfig,
  getFacetFields
} from "../config/config-helper.js";

const { hostIdentifier, searchKey, endpointBase, engineName } = getConfig();
const connector = new AppSearchAPIConnector({
  searchKey,
  engineName,
  hostIdentifier,
  endpointBase
});
const config = {
  searchQuery: {
    facets: buildFacetConfigFromConfig(),
    ...buildSearchOptionsFromConfig()
  },
  autocompleteQuery: buildAutocompleteQueryConfig(),
  apiConnector: connector,
  alwaysSearchOnInitialLoad: true
};


const SearchUI = () => {
  return (
    <div className="w-lg md:w-xl lg:w-3xl">
    <SearchProvider config={config}>
    <WithSearch mapContextToProps={({ wasSearched }) => ({ wasSearched })}>
      {({ wasSearched }) => {
        return (
          <div class="grid grid-cols-1">
            <ErrorBoundary>
            <h2>Search Food Reviews </h2>
            <div>
              <Layout
                header={<SearchBox autocompleteSuggestions={true} />}
                sideContent={
                  <div>
                    {wasSearched && (
                      <Sorting
                        label={"Sort by"}
                        sortOptions={buildSortOptionsFromConfig()}
                      />
                    )}
                    {getFacetFields().map(field => (
                      <Facet key={field} field={field} label={field} />
                    ))}
                  </div>
                }
                bodyContent={

                  <Results
                    titleField={getConfig().titleField}
                    urlField={getConfig().urlField}
                    thumbnailField={getConfig().thumbnailField}
                    shouldTrackClickThrough={true}
                  />
                }
                bodyHeader={
                  <React.Fragment>
                    {wasSearched && <PagingInfo />}
                    {wasSearched && <ResultsPerPage />}
                  </React.Fragment>
                }
                bodyFooter={<Paging />}
              />
              </div>
            </ErrorBoundary>
          </div>
        );
      }}
    </WithSearch>
  </SearchProvider>
    </div>
  )
}

export default SearchUI