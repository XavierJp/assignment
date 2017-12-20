# Algolia assignment


## Question 1:

Hello,

I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:

Records
Indexing
I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."

Cheers, George


### answer

Hello George,

I am Xavier from the Solutions Engineering team. Here is a short explaination of the concepts :

An index is a collection of items on which you can perform queries, and obtain search results.

A record is an item that you can retreive, using Algolia search angine. Each record has attributes (defined with JSON), which can be used for searching, filtering, displaying, ranking.

So the concept of indexing consists in turning your own data into an Algolia index, composed of records, with searchable/filterable attributes, on which you will search results.

The best type of metrics to include in a custom ranking depends on your business. For instance a restaurant search experience would value restaurants with the best reviews, over a strict textual relevance.

For more informations you can have a look at the Algolia documentation's definitions. If you do not understand a concept, or you want to discuss about the best custom ranking metrics to choose, do not hesitate to come back to me and eventually we can schedule a call.

Here are the documentation links on these topics :

Indexes & records : https://www.algolia.com/doc/guides/getting-started/what-is-algolia/?language=php#indices

Custom ranking : https://www.algolia.com/doc/guides/ranking/custom-ranking/#custom-ranking-overview

I hope that I answered your questions,

Regards,

Xavier


## Question 2:

Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Regards, Matt


### answer

Hello Matt,

I am Xavier from the Solutions Engineering team. I am indeed really sorry to hear that but here at Algolia we highly value customer feedback. I will immediately notify the UX team in charge of the dashboard.

However if you use the clearing/delete feature quite often did you consider using the API-based indices management system ?
If you are interested in using the API, we can help you and I believe this will be even more efficient that the old dashboard.

Here is a link to the Algolia documentation :

clear index : https://www.algolia.com/doc/api-reference/api-methods/clear-index/

delete index : https://www.algolia.com/doc/api-reference/api-methods/delete-index/

I am optimistic that we can improve your index management experience,

Regards,

Xavier


## Question 3:

Hi,

I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?

Regards, Leo

### answer

Hi Leo,

I am Xavier from the Solutions Engineering team. I am glad to hear that you consider joining us !

To answer your question, Algolia is doing everything it can to ensure that the integration is the best possible experience :

As a new customer, you can schedule a demo where our engineers will mock up an integration to you website to help you visualize the way algolia could change your website's searching experience :

https://www.algolia.com/schedule-demo

If you want to get familiar with the Algolia concepts, you can suscribe to a 14-days trial which grants you full access to the search-API.

To get started, the following documentation covers the key principles of Algolia:

https://www.algolia.com/doc/guides/getting-started/what-is-algolia/

And here is a step-by-step guide through the building of an Algolia-based search UI, using powerful and easy-to-setup libraries provided by Algolia:

https://www.algolia.com/doc/guides/search-ui/building-a-search-ui/

Do not hesitate to come back to me with your questions, and we can schedule a call to talk about Algolia's key concepts.

Regards,

Xavier


