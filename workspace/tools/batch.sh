#!/bin/bash
# slug url pairs
while read -r slug url; do
  [ -z "$slug" ] && continue
  echo "[$(date +%F_%T)] $slug $url"
  timeout 150 node capture.mjs "$url" "$slug" 2>&1 | tail -2
done <<LIST
nyu-peds-garden-city https://nyulangone.org/locations/nyu-langone-pediatric-associates-garden-city
nyp-queens-peds https://nyp.org/medicalgroups/queens/pediatrics
tribeca-pediatrics https://www.tribecapediatrics.com
nao-medical https://naomedical.com
acpny https://www.acpny.com
summit-health https://www.summithealth.com
parsley-health https://www.parsleyhealth.com
tia https://asktia.com
one-medical https://www.onemedical.com
carbon-health https://carbonhealth.com
zocdoc https://www.zocdoc.com
pediatric-associates-fl https://www.pediatricassociates.com
northern-virginia-peds https://www.northernvirginiapediatrics.com
yanlun-clinic https://www.yanlunclinic.com
healthy-kids-queens https://www.healthykidsqueens.com
national-pediatrics https://www.nationalpediatric.com
mount-sinai-concierge https://conciergecareny.mountsinai.org
LIST
echo DONE
