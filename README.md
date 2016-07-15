# IAMetric
Tool to get and visualise an information architecture's effectiveness

## Getting Started
If you're keen to run this in a dev environment, run:
    
    make install

After that's done you can run:

    make start

Or view script commands with:

    make help

## Thoughts
Most current closed card sorting tools available don't allow for helpful, meaningful understanding of the data, bearing no context and caring little for the design of the data's visualisation. The point of such a tool should be to gain insights about a project or site's IA; questions like "where are the current pain points in an app's IA" or "is there a general consensus amongst users about the taxonomy of a particular concept" are never really explored, brought to the fore, or proffered in an immediate way.

Additionally, many tools for any kind of card sorting are constrained and mechanical. Humans are not like this, and often card sorting exercises include unusual events such as the discarding of cards the user deems too difficult to categorise or the placing of cards in more than one category.

This is a design experiment to see if we can in fact improve on what's there. It assumes the data is the result of a closed card sorting exercise/s.

## Visualisation

Bubble-based "dot" charts seem most immediately decipherable and malleable as data visualisation. They can show trivariate data in addition to colour simply and clearly. Currently used visualizations like dendrograms are good for open card sorting but bad for improvement data, histogram matrices are clogged and difficult to decipher, and similarity matrices (while the best I've personally seen for this sort of data) present no visually weighted evidence of similarity and tend to lack contextual guidance for the architect.

Bubble-based "dot" charts, through the use of bubble radius, give the user an immediate grasp of the group's tendencies without the user having to know the exact degree of similarity. In effect, they provide a relative view for the user who wants it, but can be coerced into providing absolute information should it be needed, something other visualisations cannot do. 

Additionally, something that communicates the change in perception for a concept over time, if relevant and available, might also facilitate some interesting insights into the data and decisions that can be made. 

## Contextual Awareness

The biggest shortcoming for most visualisations. If we're lucky, we get a visualisation which presents the data we need, but even then it is rare to find a contextual understanding of said visualisation to guide the user forward. We are shown the data, shown perhaps a clustering of otherwise unrelated concepts, and then what? 

The information architect is given no indication of what certain clusterings might mean and for large datasets the visualisation quickly becomes unmanageable. A system which presents some contextual guidance to the visualisation's structure would be extremely beneficial.
