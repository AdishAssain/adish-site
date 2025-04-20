---
layout: ../../layouts/BlogLayout.astro
title: Model Development Via Negativa
description: Model Development Via Negativa
tags: ["model-validation", "reproducibility", "expert-elicitation"]
time: 4
featured: false
timestamp: 2024-06-15
filename: vianegativa
---
In model development, we often emphasise positive knowledge—understanding “what something is.” This approach seems intuitive, as knowing what works appears to be the most direct path to improving systems and models. However, the idea of Via Negativa suggests that understanding can also come from identifying and removing what doesn't work.

Applying this during model development means paying attention to what not to do at different stages. In model validation, for example, recognising common pitfalls is key to avoiding misleading results. Documenting these moments—when a method fails, when an assumption doesn't hold, when a preprocessing step introduces bias—can be as informative as recording what succeeds. This includes the techniques tested, data choices, algorithmic paths explored, and validation strategies that didn’t work as expected. Unexpected results and anomalies often signal underlying issues worth examining further.

This becomes especially relevant in contexts where modelling is speculative. In mechanistic disease models, for instance, many parameters are uncertain or unknowable in practice. It's common to test plausible assumptions that turn out to be flawed. Systematically documenting and excluding less plausible scenarios through expert input can help manage this uncertainty. The same process can also help identify control strategies that are ineffective or impractical, narrowing the space of reasonable interventions.

> The principle that we know what is wrong with more clarity than what is right, and that knowledge grows by subtraction. Also, it is easier to know that something is wrong than to find the fix. Actions that remove are more robust than those that add because addition may have unseen, complicated feedback loops. 

— <span style="font-style: italic; font-family: cursive; font-weight: 200;">Nassim Nicholas Taleb, &nbsp; Antifragile</span>

Focusing on what not to do improves clarity, reproducibility, and generalisability, without compromising representativeness. This approach doesn't guarantee better models, but it helps avoid familiar mistakes and makes it easier to refine and improve the model over time.





