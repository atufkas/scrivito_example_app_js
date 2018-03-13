import * as React from 'react';
import * as Scrivito from 'scrivito';

Scrivito.provideComponent('BoxWidget', ({ widget }) => {
  const classNames = [];
  if (widget.get('cardStyle') === 'card') { classNames.push('card'); }
  else { classNames.push('card card-theme'); }
  if (widget.get('useOffset') === 'yes') { classNames.push('box-offset'); }

  return (
    <Scrivito.WidgetTag className={ classNames.join(' ') }>
      <Scrivito.ContentTag content={ widget } attribute="body" className="card-body"/>
    </Scrivito.WidgetTag>
  );
});
